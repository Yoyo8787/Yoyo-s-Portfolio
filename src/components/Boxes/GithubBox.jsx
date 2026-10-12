import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { FaGithub } from "react-icons/fa";
import { githubBoxConfig } from "../../assets/boxSetting";

const GithubBox = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = githubBoxConfig[position] || {};
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <div className={style.iconbox}>
                <FaGithub className={style.largeicon} />
                <div style={{ fontSize: "1rem" }}>github.com/Yoyo8787</div>
            </div>
        </Box>
    );
};

export default GithubBox;
