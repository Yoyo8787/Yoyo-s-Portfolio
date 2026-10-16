import type { KeyboardEvent, ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { TbArrowRight, TbArrowUpRight, TbMail } from "react-icons/tb";
import type { CardInteraction, CardPlacement, CardTone } from "../../types";

gsap.registerPlugin(Flip);

interface BentoCardProps {
    children: ReactNode;
    placement: CardPlacement;
    interaction: CardInteraction;
    tone?: CardTone;
}

const animationStyles = "transform,transformOrigin,width,height,position,top,left,zIndex,maxWidth,maxHeight,minWidth,minHeight,paddingTop,paddingRight,paddingBottom,paddingLeft,transition";

const actionIcons = {
    content: { Icon: TbArrowRight, label: "detail" },
    link: { Icon: TbArrowUpRight, label: "newTab" },
    mail: { Icon: TbMail, label: "mail" },
} as const;

const BentoCard = ({ children, placement, interaction, tone = "default" }: BentoCardProps) => {
    const { t } = useTranslation();
    const boxRef = useRef<HTMLDivElement>(null);
    const flipRef = useRef<gsap.core.Timeline | null>(null);
    const clickRef = useRef<gsap.core.Timeline | null>(null);
    const { gridArea, disabled } = placement;
    const interactive = interaction.type !== "none";
    const opacity = disabled ? 0.45 : 1;
    const filter = disabled ? "blur(1.5px)" : "blur(0px)";

    const restoreLayout = () => {
        gsap.set(boxRef.current!, { clearProps: animationStyles });
        gsap.set(boxRef.current!, { gridArea, opacity, filter });
    };

    const stopAnimations = () => {
        // 避免下一次 Flip 快照將已中斷的 timeline 推到結尾。
        flipRef.current?.eventCallback("onComplete", null);
        flipRef.current?.pause().kill();
        clickRef.current?.eventCallback("onComplete", null);
        clickRef.current?.pause().kill();
        flipRef.current = null;
        clickRef.current = null;
        restoreLayout();
    };

    useLayoutEffect(() => {
        const box = boxRef.current!;
        if (disabled && document.activeElement === box) box.blur();
        const state = Flip.getState(box);
        restoreLayout();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return stopAnimations;
        flipRef.current = Flip.from(state, {
            duration: 0.6,
            ease: "back.out(1.2)",
            absolute: true,
            onComplete: restoreLayout,
        });

        return stopAnimations;
    }, [gridArea, opacity, disabled]);

    const activate = () => {
        if (disabled) return;
        stopAnimations();
        if (interaction.type === "content") interaction.onActivate();
        clickRef.current = gsap.timeline({ onComplete: restoreLayout })
            .to(boxRef.current!, { scale: 0.97, duration: 0.06, ease: "power1.out" })
            .to(boxRef.current!, { scale: 1, duration: 0.06, ease: "power1.in" });
    };

    const isMail = interaction.type === "link" && interaction.href.startsWith("mailto:");
    const action = interaction.type === "none" ? null : actionIcons[isMail ? "mail" : interaction.type];
    const className = interactive
        ? "relative border-2 border-solid border-primary shadow-card cursor-pointer transition-[translate,box-shadow] duration-120 hover:-translate-y-0.5 hover:shadow-[0.4rem_0.4rem_0_var(--shadowcolor)]"
        : "relative";
    const colors = tone === "ink" ? "bg-ink text-on-ink" : `${interactive ? "bg-surface" : "bg-surface-2"} text-foreground`;
    const isButton = interaction.type === "content";

    return (
        <div
            style={{ gridArea, opacity, filter }}
            ref={boxRef}
            inert={disabled}
            onClick={interactive ? activate : undefined}
            {...(isButton ? {
                role: "button",
                tabIndex: 0,
                onKeyDown: (event: KeyboardEvent) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        if (!event.repeat) activate();
                    }
                },
            } : {})}
            className={`${className} ${colors} p-4 rounded-2xl overflow-hidden`}
        >
            {children}
            {interaction.type === "link" && (
                <a href={interaction.href}
                    {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    aria-label={isMail ? t("mailTo", { email: interaction.href.slice("mailto:".length) }) : t("externalLink", { url: interaction.href })}
                    className="absolute inset-0 z-10" />
            )}
            {action && (
                <span className="absolute top-3 right-3 z-20 w-7 h-7 grid place-items-center rounded-full bg-surface text-primary-ink pointer-events-none"
                    aria-label={t(action.label)} role="img">
                    <action.Icon aria-hidden />
                </span>
            )}
        </div>
    );
};

export default BentoCard;
