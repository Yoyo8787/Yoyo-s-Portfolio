import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import pic from "../../assets/project3_main.PNG";

const ProjectBox3 = ({ setPage, position = "00" }) => {
    const gridarea = () => {
        if (position === "00") {
            return "3 / 4 / 5 / 5";
        }
        if (position === "01") {
            return "3 / 3 / 5 / 4";
        }
        if (position === "02") {
            return "1 / 4 / 3 / 5";
        }
        if (position === "03") {
            return "1 / 4 / 3 / 5";
        }
        if (position === "00mobile") {
            return "6 / 2 / 8 / 3";
        }
        if (position === "01mobile") {
            return "4 / 2 / 6 / 3";
        }
        if (position === "02mobile") {
            return "3 / 2 / 5 / 3";
        }
        if (position === "03mobile") {
            return "7 / 2 / 9 / 3";
        }
    };
    const hidden = () => {
        if (!position.includes("00") && !position.includes("02")) {
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
            <h2>實務經驗</h2>
            <h3>木質構造建築暨結構查詢資料庫</h3>
            <img src={pic} alt="" className={style.pic3} />
        </Box>
    );
};

export default ProjectBox3;
