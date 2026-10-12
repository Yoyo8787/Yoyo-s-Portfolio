import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import pic from "../../assets/project2_main.png";
import { projectBox2Config } from "../../assets/boxSetting";

const ProjectBox2 = ({ setPage, position = "00" }: CardProps) => {
    const { gridArea, opacity } = projectBox2Config[position];
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>實務經驗</h2>
            <h3>線上測驗系統</h3>
            <img src={pic} alt="" className="[transform:rotate(-20deg)] w-[30rem] relative -top-4 left-4 rounded-sm" />
        </Box>
    );
};

export default ProjectBox2;
