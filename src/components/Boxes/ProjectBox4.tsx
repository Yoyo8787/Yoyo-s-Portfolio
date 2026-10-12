import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import pic from "../../assets/project4_main.png";
import { projectBox4Config } from "../../assets/boxSetting";

const ProjectBox4 = ({ setPage, position = "00" }: CardProps) => {
    const { gridArea, opacity } = projectBox4Config[position];
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>實務經驗</h2>
            <h3>出貨單 CRUD 平台</h3>
            <img src={pic} alt="" className="[transform:rotate(-20deg)] w-[30rem] relative -top-4 left-4 rounded-sm" />
        </Box>
    );
};

export default ProjectBox4;
