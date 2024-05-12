import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import pic from "../../assets/project2_main.PNG";

const ProjectBox2 = ({ setPage, position }) => {
    const gridarea = () => {
        if (position === "00") {
            return "1 / 3 / 3 / 5";
        }
        if (position === "01") {
            return "3 / 1 / 5 / 3";
        }
        if (position === "02") {
            return "1 / 1 / 3 / 3";
        }
        if (position === "03") {
            return "2 / 2 / 4 / 5";
        }
    };
    const hidden = () => {
        if (position !== "00" && position !== "02") {
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
            <h3>線上測驗系統</h3>
            <img src={pic} alt="" className={style.pic2} />
        </Box>
    );
};

export default ProjectBox2;
