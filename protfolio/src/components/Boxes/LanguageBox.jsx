import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { languageBoxConfig } from "../../assets/boxSetting";

const LanguageBox = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = languageBoxConfig[position] || {};
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>語言</h2>
            <div className={style.txtbox}>多益890分金色證書</div>
        </Box>
    );
};

export default LanguageBox;
