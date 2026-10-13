import type { CSSProperties, ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import type { CardProps } from "../../types";

gsap.registerPlugin(Flip);

interface LayoutProps extends CardProps {
    children: ReactNode;
    boxstyle?: CSSProperties;
}

// Flip 的 absolute 配置會暫存位置、尺寸及內距；中斷時一併移除。
const animationStyles = "transform,transformOrigin,width,height,position,top,left,zIndex,maxWidth,maxHeight,minWidth,minHeight,paddingTop,paddingRight,paddingBottom,paddingLeft,transition";

const Layout = ({ children, boxstyle = {}, layout, disabled, setPage }: LayoutProps) => {
    const boxRef = useRef<HTMLDivElement>(null);
    const flipRef = useRef<gsap.core.Timeline | null>(null);
    const clickRef = useRef<gsap.core.Timeline | null>(null);
    const { gridArea } = layout;
    const opacity = layout.opacity ?? 1;

    const restoreLayout = () => {
        gsap.set(boxRef.current!, { clearProps: animationStyles });
        gsap.set(boxRef.current!, { gridArea, opacity });
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
        flipRef.current = Flip.from(state, {
            duration: 1,
            ease: "power1.inOut",
            absolute: true,
            onComplete: restoreLayout,
        });

        return stopAnimations;
    }, [gridArea, opacity, disabled]);

    const activate = () => {
        if (disabled) return;
        stopAnimations();
        setPage();
        clickRef.current = gsap.timeline({ onComplete: restoreLayout })
            .to(boxRef.current!, { scale: 0.8, opacity: 0.8, duration: 0.1, ease: "power1.inOut" })
            .to(boxRef.current!, { scale: 1.5, opacity: 0, duration: 0.9, ease: "power1.inOut" })
            .to(boxRef.current!, { scale: 1, opacity, duration: 0.1, ease: "power1.inOut" });
    };

    return (
        <div
            style={{ ...boxstyle, opacity }}
            onClick={activate}
            role="button"
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    if (!event.repeat) activate();
                }
            }}
            ref={boxRef}
            className={`border border-solid border-primary p-4 rounded-lg ${disabled ? "cursor-default" : "cursor-pointer"} overflow-hidden text-foreground bg-background`}
        >
            {children}
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
