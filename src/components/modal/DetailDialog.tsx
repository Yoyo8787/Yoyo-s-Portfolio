import type { ReactNode } from "react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
import type { DialogSize } from "../../types";

interface DetailDialogProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
    scrollKey?: string | null;
    size: DialogSize;
    labelledBy?: string;
}

const panelWidths: Record<DialogSize, string> = {
    sm: "w-190",
    md: "w-220",
    lg: "w-240",
    xl: "w-250",
};

const DetailDialog = ({ children, open, onClose, scrollKey, size, labelledBy }: DetailDialogProps) => {
    const { t } = useTranslation();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const panelAnimationRef = useRef<Animation | null>(null);
    const closingRef = useRef(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const dialog = dialogRef.current!;
        closingRef.current = false;
        if (open) {
            dialog.showModal();
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                const isMobile = window.matchMedia("(max-width: 650px)").matches;
                panelAnimationRef.current = panelRef.current!.animate(
                    [
                        { transform: isMobile ? "translateY(100%)" : "translateY(8px)", opacity: isMobile ? 1 : 0 },
                        { transform: "translateY(0)", opacity: 1 },
                    ],
                    { duration: isMobile ? 300 : 240, easing: "cubic-bezier(0.2, 0, 0, 1)" },
                );
            }
        } else dialog.close();

        return () => {
            panelAnimationRef.current?.cancel();
            dialog.getAnimations().forEach((animation) => animation.cancel());
            dialog.close();
        };
    }, [open]);

    const handleClose = () => {
        if (closingRef.current) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            onClose();
            return;
        }
        closingRef.current = true;
        const panel = panelRef.current!;
        const { transform, opacity } = getComputedStyle(panel);
        const isMobile = window.matchMedia("(max-width: 650px)").matches;
        panelAnimationRef.current?.cancel();
        const animation = panel.animate(
            [
                { transform, opacity },
                { transform: isMobile ? "translateY(100%)" : "translateY(8px)", opacity: isMobile ? 1 : 0 },
            ],
            { duration: 240, easing: "ease-in", fill: "forwards" },
        );
        panelAnimationRef.current = animation;
        const dialog = dialogRef.current!;
        const overlayOpacity = getComputedStyle(dialog).opacity;
        dialog.getAnimations().forEach((current) => current.cancel());
        dialog.animate([{ opacity: overlayOpacity }, { opacity: 0 }], { duration: 240, fill: "forwards" });
        void animation.finished.then(onClose, () => {});
    };

    // 切換到另一個專案時回到頂端。
    useEffect(() => {
        scrollRef.current?.scrollTo({ top: 0 });
    }, [scrollKey]);

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby={labelledBy}
            className="m-0 p-0 border-0 bg-[color-mix(in_srgb,var(--backgroundcolor)_80%,transparent)] w-screen h-screen max-w-dvw max-h-dvh fixed top-0 left-0 open:flex justify-center items-center overflow-hidden open:animate-overlay motion-reduce:animate-none backdrop:bg-transparent mobile:items-end"
            onCancel={(event) => {
                event.preventDefault();
                handleClose();
            }}
            onClick={(event) => {
                if (event.target === event.currentTarget) handleClose();
            }}
        >
            <div aria-hidden="true" className="seigaiha [--wave-a:var(--backgroundcolor)] [--wave-b:var(--surface2color)] absolute inset-0 opacity-25 pointer-events-none" />
            {open && (
                <div ref={panelRef} className={`${panelWidths[size]} relative bg-surface text-foreground border-2 border-solid border-primary rounded-2xl shadow-[0.5rem_0.5rem_0_var(--secondarycolor)] overflow-hidden max-w-[90vw] max-h-[90dvh] flex flex-col mobile:max-w-full mobile:w-full mobile:max-h-[92dvh] mobile:rounded-b-none mobile:border-x-0 mobile:border-b-0 mobile:shadow-none`}>
                    <button
                        type="button"
                        autoFocus
                        aria-label={t("close")}
                        className="z-20 size-11 grid place-items-center rounded-xl border-2 border-solid border-primary bg-surface text-foreground shadow-[0.2rem_0.2rem_0_var(--shadowcolor)] absolute top-3.5 right-4 cursor-pointer text-[1.25rem] mobile:top-2.5 mobile:right-3"
                        onClick={handleClose}
                    >
                        <IoMdClose />
                    </button>
                    <div ref={scrollRef} className="dialog-scroll min-h-0 overflow-y-auto overflow-x-hidden">{children}</div>
                </div>
            )}
        </dialog>
    );
};

export default DetailDialog;
