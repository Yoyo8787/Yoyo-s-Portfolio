import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { OpenPage } from "../types";
import React from "react";
import style from "./FullPage.module.css";
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
                    className={style.modaloverlay}
                    onClick={() => setOpen(false)}
                >
                    <div
                        className={style.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={style.closebt}
                            onClick={() => setOpen(false)}
                        >
                            <IoMdClose className={style.closebt} />
                        </button>
                        <div className={style.modalcontent}>{open}</div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default FullPage;
