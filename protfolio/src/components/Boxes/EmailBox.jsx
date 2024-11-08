import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { MdEmail } from "react-icons/md";
import { emailBoxConfig } from "../../assets/boxSetting";

const EmailBox = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = emailBoxConfig[position] || {};
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <div className={style.iconbox}>
                <MdEmail className={style.largeicon} />
                <div style={{ fontSize: "1rem" }}>yoyo0918887333@gmail.com</div>
            </div>
        </Box>
    );
};

export default EmailBox;
