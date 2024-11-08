import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { jobBoxConfig } from "../../assets/boxSetting";
const JobBox = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = jobBoxConfig[position] || {};
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>工作經驗</h2>
            <ul className={style.list}>
                <li>DeepQ 奧啓迪</li>
                <li>三元及第文教機構</li>
                <li>台北市補教協會</li>
            </ul>
        </Box>
    );
};

export default JobBox;
