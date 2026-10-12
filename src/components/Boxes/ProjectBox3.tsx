import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import pic from "../../assets/project3_main.png";
import { projectBox3Config } from "../../assets/boxSetting";

const ProjectBox3 = ({ setPage, position = "00" }: CardProps) => {
    const { gridArea, opacity } = projectBox3Config[position];
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>實務經驗</h2>
            <h3>木質構造建築暨結構查詢資料庫</h3>
            <img src={pic} alt="" className="[transform:rotate(-25deg)] w-[12rem] relative top-4 left-12 rounded-sm" />
        </Box>
    );
};

export default ProjectBox3;
