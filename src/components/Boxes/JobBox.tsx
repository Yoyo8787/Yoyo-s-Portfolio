import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import { jobBoxConfig } from "../../assets/boxSetting";
const JobBox = ({ setPage, position = "00" }: CardProps) => {
    const { gridArea, opacity } = jobBoxConfig[position];
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>工作經驗</h2>
            <ul className="max-w-full pt-2 gap-4 [&>li]:ml-4 [&>li]:mb-1">
                <li>DeepQ 奧啓迪</li>
                <li>三元及第文教機構</li>
                <li>台北市補教協會</li>
            </ul>
        </Box>
    );
};

export default JobBox;
