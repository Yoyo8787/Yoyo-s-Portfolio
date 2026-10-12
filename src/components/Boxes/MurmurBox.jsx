import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { IoChatboxEllipses } from "react-icons/io5";
import { murmurBoxConfig } from "../../assets/boxSetting";

const MurmurBox = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = murmurBoxConfig[position] || {};
    return (
        <Box
            boxstyle={{ aspectRatio: "1 / 1", opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <div className={style.iconbox}>
                <IoChatboxEllipses className={style.largeicon} />
                <div>好想泡溫泉~</div>
            </div>
        </Box>
    );
};

export default MurmurBox;
