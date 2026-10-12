import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { OpenPage } from "../types";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface FullPageProps {
    children: ReactNode;
    open: OpenPage;
    setOpen: Dispatch<SetStateAction<OpenPage>>;
}

const FullPage = ({ children, open, setOpen }: FullPageProps) => {
    return (
        <>
            {open ? (
                <div
                    className="bg-[color-mix(in_srgb,var(--backgroundcolor)_90%,transparent)] w-screen h-screen max-w-[100dvw] max-h-[100dvh] fixed top-0 left-0 z-2 flex justify-center items-center overflow-hidden animate-overlay"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-background border border-solid border-primary rounded-[0.2rem] max-w-[80vw] max-h-[90vh] relative animate-modal narrow:max-w-[90dvw] narrow:max-h-[90dvh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="bg-background absolute top-1 right-1 text-foreground cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            <IoMdClose className="bg-background absolute top-1 right-1 text-foreground cursor-pointer" />
                        </button>
                        <div className="mt-4 px-8 pt-4 pb-8 flex items-stretch flex-col overflow-y-scroll max-h-[80vh] max-w-full overflow-x-hidden text-foreground">{open}</div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default FullPage;
