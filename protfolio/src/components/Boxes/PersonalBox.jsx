import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";

const PersonalBox = ({ setPage = () => {}, position = 0 }) => {
    const gridarea = () => {
        if (position === "00") {
            return "1 / 1 / 2 / 3";
        }
        if (position === "01") {
            return "1 / 1 / 2 / 3";
        }
        if (position === "02") {
            return "3 / 1 / 4 / 3";
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
            onclick={() => {
                setPage();
            }}
        >
            <div>
                <h2>簡介</h2>
                <div className={style.txtbox}>
                    我是<b>徐天祐</b>，一位資訊管理研究所人機互動實驗室的學生。
                    我的興趣與專長主要是網頁全端開發，尤其是前端的設計與開發，研究主題也圍繞著前端設計與使用者互動模式。
                </div>
            </div>
        </Box>
    );
};

export default PersonalBox;
