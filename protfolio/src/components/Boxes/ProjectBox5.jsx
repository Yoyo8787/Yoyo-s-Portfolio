import React from "react";
import Box from "../Box";
import { projectBox5Config } from "../../assets/boxSetting";

const ProjectBox5 = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = projectBox5Config[position] || {};
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>實務經驗</h2>
            <h3>
                聊天機器人
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;配置編輯器
            </h3>
        </Box>
    );
};

export default ProjectBox5;
