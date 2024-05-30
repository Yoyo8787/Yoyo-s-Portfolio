import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import pic from "../../assets/project1_main2.PNG";

const ProjectBox1 = ({ setPage, position = "00" }) => {
    const gridarea = () => {
        if (position === "00") {
            return "3 / 3 / 5 / 4";
        }
        if (position === "01") {
            return "2 / 4 / 4 / 5";
        }
        if (position === "02") {
            return "1 / 3 / 3 / 4";
        }
        if (position === "03") {
            return "3 / 4 / 5 / 5";
        }
        if (position === "00mobile") {
            return "6 / 1 / 8 / 2";
        }
        if (position === "01mobile") {
            return "5 / 1 / 7 / 2";
        }
        if (position === "02mobile") {
            return "3 / 1 / 5 / 2";
        }
        if (position === "03mobile") {
            return "8 / 1 / 10 / 2";
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
            <h3>學習診斷系統</h3>
            <img src={pic} alt="" className={style.pic3} />
        </Box>
    );
};

export default ProjectBox1;
