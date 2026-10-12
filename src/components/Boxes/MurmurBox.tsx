import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import { IoChatboxEllipses } from "react-icons/io5";
import { murmurBoxConfig } from "../../assets/boxSetting";

const MurmurBox = ({ setPage, position = "00" }: CardProps) => {
    const { gridArea, opacity } = murmurBoxConfig[position];
    return (
        <Box
            boxstyle={{ aspectRatio: "1 / 1", opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <div className="h-full flex justify-center items-center gap-2">
                <IoChatboxEllipses className="w-[15%] text-[2rem]" />
                <div>好想泡溫泉~</div>
            </div>
        </Box>
    );
};

export default MurmurBox;
