import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { personalBoxConfig } from "../../assets/boxSetting";

const PersonalBox = ({ setPage = () => {}, position = "00" }) => {
    const { gridArea, opacity } = personalBoxConfig[position] || {};
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => {
                setPage();
            }}
        >
            <div>
                <h2>簡介</h2>
                <div className={style.txtbox}>
                    我是<b>徐天祐</b>，一位資訊管理研究所人機互動實驗室的學生。
                    我的興趣與專長主要是網頁全端開發，尤其是前端的設計與開發，希望能作為一名全端工程師有所貢獻。
                </div>
            </div>
        </Box>
    );
};

export default PersonalBox;
