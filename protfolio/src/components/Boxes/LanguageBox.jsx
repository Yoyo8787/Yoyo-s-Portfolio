import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";

const LanguageBox = ({ setPage, position }) => {
    const gridarea = () => {
        if (position === "00") {
            return "2 / 2 / 3 / 3";
        }
        if (position === "01") {
            return "2 / 1 / 3 / 2";
        }
        if (position === "02") {
            return "4 / 2 / 5 / 3";
        }
        if (position === "03") {
            return "2 / 1 / 3 / 2";
        }
    };
    const hidden = () => {
        if (position !== "00" && position !== "01") {
            return "0.2";
        } else {
            return "1";
        }
    };
    return (
        <Box
            boxstyle={{ opacity: hidden() }}
            gridArea={gridarea()}
            onclick={() => setPage()}
        >
            <h2>語言</h2>
            <div className={style.txtbox}>多益890分金色證書</div>
        </Box>
    );
};

export default LanguageBox;
