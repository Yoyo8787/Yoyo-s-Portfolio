import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import pic from "../../assets/project3_main.PNG";
import { projectBox3Config } from "../../assets/boxSetting";

const ProjectBox3 = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = projectBox3Config[position] || {};
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>實務經驗</h2>
            <h3>木質構造建築暨結構查詢資料庫</h3>
            <img src={pic} alt="" className={style.pic3} />
        </Box>
    );
};

export default ProjectBox3;
