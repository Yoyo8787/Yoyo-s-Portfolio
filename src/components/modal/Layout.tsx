import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

interface LayoutProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
    scrollKey?: string | null;
}

const Layout = ({ children, open, onClose, scrollKey }: LayoutProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current!;
        if (open) dialog.showModal();
        else dialog.close();

        return () => dialog.close();
    }, [open]);

    // 切換到另一個專案時回到頂端。
    useEffect(() => {
        scrollRef.current?.scrollTo({ top: 0 });
    }, [scrollKey]);

    return (
        <dialog
            ref={dialogRef}
            aria-label="詳細內容"
            className="m-0 p-0 border-0 bg-[color-mix(in_srgb,var(--backgroundcolor)_80%,transparent)] w-screen h-screen max-w-dvw max-h-dvh fixed top-0 left-0 open:flex justify-center items-center overflow-hidden open:animate-overlay backdrop:bg-transparent mobile:items-end"
            onCancel={(event) => {
                event.preventDefault();
                onClose();
            }}
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div aria-hidden="true" className="seigaiha [--wave-a:var(--backgroundcolor)] [--wave-b:var(--surface2color)] absolute inset-0 opacity-25 pointer-events-none" />
            {open && (
                <div className="relative bg-surface text-foreground border-2 border-solid border-primary rounded-2xl shadow-[0.5rem_0.5rem_0_var(--secondarycolor)] overflow-hidden max-w-[90vw] max-h-[90dvh] flex flex-col animate-modal motion-reduce:animate-none mobile:max-w-full mobile:w-full mobile:max-h-[92dvh] mobile:rounded-b-none mobile:border-x-0 mobile:border-b-0 mobile:shadow-none">
                    <button
                        type="button"
                        autoFocus
                        aria-label="關閉詳細內容"
                        className="z-20 size-11 grid place-items-center rounded-xl border-2 border-solid border-primary bg-surface text-foreground shadow-[0.2rem_0.2rem_0_var(--shadowcolor)] absolute top-3.5 right-4 cursor-pointer text-[1.25rem] mobile:top-2.5 mobile:right-3"
                        onClick={onClose}
                    >
                        <IoMdClose />
                    </button>
                    <div ref={scrollRef} className="min-h-0 overflow-y-auto overflow-x-hidden">{children}</div>
                </div>
            )}
        </dialog>
    );
};

export default Layout;
