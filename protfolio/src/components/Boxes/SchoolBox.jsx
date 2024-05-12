import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";

const SchoolBox = ({ setPage, position }) => {
    const gridarea = () => {
        if (position === "00") {
            return "3 / 1 / 4 / 3";
        }
        if (position === "01") {
            return "2 / 2 / 3 / 4";
        }
        if (position === "02") {
            return "3 / 3 / 4 / 5";
        }
        if (position === "03") {
            return "2 / 2 / 4 / 5";
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
