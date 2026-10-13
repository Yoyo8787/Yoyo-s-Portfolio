import type { ReactNode } from "react";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface FullPageProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

const FullPage = ({ children, open, onClose }: FullPageProps) => {
    return (
        <>
            {open ? (
                <div
                    className="bg-[color-mix(in_srgb,var(--backgroundcolor)_90%,transparent)] w-screen h-screen max-w-dvw max-h-dvh fixed top-0 left-0 z-2 flex justify-center items-center overflow-hidden animate-overlay"
                    onClick={onClose}
                >
                    <div
                        className="bg-background border border-solid border-primary rounded-[0.2rem] max-w-[80vw] max-h-[90vh] relative animate-modal narrow:max-w-[90dvw] narrow:max-h-[90dvh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="bg-background absolute top-1 right-1 text-foreground cursor-pointer"
                            onClick={onClose}
                        >
                            <IoMdClose className="bg-background absolute top-1 right-1 text-foreground cursor-pointer" />
                        </button>
                        <div className="mt-4 px-8 pt-4 pb-8 flex items-stretch flex-col overflow-y-scroll max-h-[80vh] max-w-full overflow-x-hidden text-foreground">{children}</div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default FullPage;
