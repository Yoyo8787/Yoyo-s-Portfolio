import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import { schoolBoxConfig } from "../../assets/boxSetting";
const SchoolBox = ({ setPage, position = "00" }: CardProps) => {
    const { gridArea, opacity } = schoolBoxConfig[position];
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>學歷</h2>
            <ul className="max-w-full pt-2 gap-4 [&>li]:ml-4 [&>li]:mb-1">
                <li>國立台灣大學 資訊管理所 人機互動實驗室</li>
                <li>國立台灣大學 森林環境暨資源學系</li>
                <li>台北市立建國高級中學</li>
            </ul>
        </Box>
    );
};

export default SchoolBox;
