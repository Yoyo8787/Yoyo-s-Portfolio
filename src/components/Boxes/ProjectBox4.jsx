import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import pic from "../../assets/project4_main.PNG";
import { projectBox4Config } from "../../assets/boxSetting";

const ProjectBox4 = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = projectBox4Config[position] || {};
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>實務經驗</h2>
            <h3>出貨單 CRUD 平台</h3>
            <img src={pic} alt="" className={style.pic2} />
        </Box>
    );
};

export default ProjectBox4;
