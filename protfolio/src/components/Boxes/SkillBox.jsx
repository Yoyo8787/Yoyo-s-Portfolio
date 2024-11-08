import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { skillBoxConfig } from "../../assets/boxSetting";

const SkillBox = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = skillBoxConfig[position] || {};
    return (
        <Box
            boxstyle={{ aspectRatio: "1 / 1", opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>技能</h2>
            <ul className={style.list}>
                <li>JavaScript, C#, Python</li>
                <li>HTML, CSS, JavaScript, React, Blazor</li>
                <li>Node.js, ASP.NET</li>
                <li>MongoDB, SQL Server, FireStore, Redis</li>
                <li>GCP, AWS</li>
                <li>VSCode, Unity, Git/Github, CI/CD</li>
                <li>scikit-learn, XGBoost, TensorFlow, PyTorch</li>
            </ul>
        </Box>
    );
};

export default SkillBox;
