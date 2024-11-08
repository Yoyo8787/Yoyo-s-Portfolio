import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { phoneBoxConfig } from "../../assets/boxSetting";

const PhoneBox = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = phoneBoxConfig[position] || {};
    return (
        <Box
            boxstyle={{ aspectRatio: "1 / 1", opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <div className={style.iconbox}>
                <FaPhoneAlt className={style.largeicon} />
                <div>0918887333</div>
            </div>
        </Box>
    );
};

export default PhoneBox;
