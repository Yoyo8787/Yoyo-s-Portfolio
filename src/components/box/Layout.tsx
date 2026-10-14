import type { CSSProperties, KeyboardEvent, ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { TbArrowRight, TbArrowUpRight, TbMail } from "react-icons/tb";
import type { CardProps } from "../../types";

gsap.registerPlugin(Flip);

interface LayoutProps extends CardProps {
    children: ReactNode;
    boxstyle?: CSSProperties;
}

const animationStyles = "transform,transformOrigin,width,height,position,top,left,zIndex,maxWidth,maxHeight,minWidth,minHeight,paddingTop,paddingRight,paddingBottom,paddingLeft,transition";

const actionIcons = {
    content: { Icon: TbArrowRight, label: "查看詳情" },
    link: { Icon: TbArrowUpRight, label: "在新分頁開啟" },
    mail: { Icon: TbMail, label: "寄信" },
};

const Layout = ({ children, boxstyle = {}, layout, disabled, setPage, actionType, href }: LayoutProps) => {
    const boxRef = useRef<HTMLDivElement>(null);
    const flipRef = useRef<gsap.core.Timeline | null>(null);
    const clickRef = useRef<gsap.core.Timeline | null>(null);
    const { gridArea } = layout;
    const interactive = actionType !== "none";
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
        if (actionType !== "link") setPage();
        clickRef.current = gsap.timeline({ onComplete: restoreLayout })
            .to(boxRef.current!, { scale: 0.97, duration: 0.06, ease: "power1.out" })
            .to(boxRef.current!, { scale: 1, duration: 0.06, ease: "power1.in" });
    };

    const isMail = href?.startsWith("mailto:") ?? false;
    const action = actionType === "none" ? null : actionIcons[isMail ? "mail" : actionType];
    const className = interactive
        ? "relative border-2 border-solid border-primary bg-surface shadow-card cursor-pointer transition-[translate,box-shadow] duration-120 hover:-translate-y-0.5 hover:shadow-[0.4rem_0.4rem_0_var(--shadowcolor)]"
        : "relative bg-surface-2";
    const isButton = interactive && actionType !== "link";

    return (
        <div
            style={{ ...boxstyle, opacity, filter }}
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
            className={`${className} p-4 rounded-2xl overflow-hidden text-foreground`}
        >
            {children}
            {actionType === "link" && (
                <a href={href}
                    {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    aria-label={isMail ? `寄信給 ${href!.slice("mailto:".length)}` : `${href}（在新分頁開啟）`}
                    className="absolute inset-0 z-10" />
            )}
            {action && (
                <span className="absolute top-3 right-3 z-20 w-7 h-7 grid place-items-center rounded-full bg-surface text-primary-ink pointer-events-none"
                    aria-label={action.label} role="img">
                    <action.Icon aria-hidden />
                </span>
            )}
        </div>
    );
};

export const CenteredContent = ({ children }: { children: ReactNode }) => (
    <div className="h-full flex justify-center items-center gap-2">{children}</div>
);

export const SummaryList = ({ children }: { children: ReactNode }) => (
    <ul className="max-w-full pt-2 gap-4 [&>li]:ml-4 [&>li]:mb-1">{children}</ul>
);

export default Layout;
