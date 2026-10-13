import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

interface LayoutProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

const Layout = ({ children, open, onClose }: LayoutProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current!;
        if (open) dialog.showModal();
        else dialog.close();

        return () => dialog.close();
    }, [open]);

    return (
        <dialog
            ref={dialogRef}
            aria-label="詳細內容"
            className="m-0 p-0 border-0 bg-[color-mix(in_srgb,var(--backgroundcolor)_90%,transparent)] w-screen h-screen max-w-dvw max-h-dvh fixed top-0 left-0 open:flex justify-center items-center overflow-hidden open:animate-overlay backdrop:bg-transparent"
            onCancel={(event) => {
                event.preventDefault();
                onClose();
            }}
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            {open && (
                <div className="bg-background border border-solid border-primary rounded-[0.2rem] max-w-[80vw] max-h-[90vh] relative animate-modal narrow:max-w-[90dvw] narrow:max-h-[90dvh]">
                    <button
                        type="button"
                        autoFocus
                        aria-label="關閉詳細內容"
                        className="bg-background absolute top-2 right-2 text-foreground cursor-pointer"
                        onClick={onClose}
                    >
                        <IoMdClose />
                    </button>
                    <div className="mt-4 px-8 pt-4 pb-8 flex items-stretch flex-col overflow-y-scroll max-h-[80vh] max-w-full overflow-x-hidden text-foreground">{children}</div>
                </div>
            )}
        </dialog>
    );
};

export default Layout;
