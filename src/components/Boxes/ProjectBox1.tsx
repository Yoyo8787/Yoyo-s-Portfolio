import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import pic from "../../assets/project1_main2.png";
import { projectBox1Config } from "../../assets/boxSetting";

const ProjectBox1 = ({ setPage, position = "00" }: CardProps) => {
    const { gridArea, opacity } = projectBox1Config[position];
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>實務經驗</h2>
            <h3>學習診斷系統</h3>
            <img src={pic} alt="" className={style.pic3} />
        </Box>
    );
};

export default ProjectBox1;
