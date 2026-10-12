import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import pic from "../../assets/project2_main.PNG";
import { projectBox2Config } from "../../assets/boxSetting";

const ProjectBox2 = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = projectBox2Config[position] || {};
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>實務經驗</h2>
            <h3>線上測驗系統</h3>
            <img src={pic} alt="" className={style.pic2} />
        </Box>
    );
};

export default ProjectBox2;
