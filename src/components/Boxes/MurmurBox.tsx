import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import { IoChatboxEllipses } from "react-icons/io5";

const MurmurBox = ({ setPage, layout, disabled }: CardProps) => {
    const { gridArea, opacity } = layout;
    return (
        <Box
            boxstyle={{ aspectRatio: "1 / 1", opacity: opacity }}
            gridArea={gridArea}
            disabled={disabled}
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
