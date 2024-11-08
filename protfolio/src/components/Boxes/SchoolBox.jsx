import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { schoolBoxConfig } from "../../assets/boxSetting";
const SchoolBox = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = schoolBoxConfig[position] || {};
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>學歷</h2>
            <ul className={style.list}>
                <li>國立台灣大學 資訊管理所 人機互動實驗室</li>
                <li>國立台灣大學 森林環境暨資源學系</li>
                <li>台北市立建國高級中學</li>
            </ul>
        </Box>
    );
};

export default SchoolBox;
