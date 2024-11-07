import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { FaGithub } from "react-icons/fa";

const GithubBox = ({ setPage, position = "00" }) => {
    const gridarea = () => {
        if (position === "00") {
            return "5 / 2 / 6 / 4";
        }
        if (position === "01") {
            return "5 / 3 / 6 / 5";
        }
        if (position === "02") {
            return "5 / 2 / 6 / 4";
        }
        if (position === "03") {
            return "2 / 1 / 3 / 3";
        }
        if (position === "00mobile") {
            return "8 / 1 / 9 / 3";
        }
        if (position === "01mobile") {
            return "9 / 1 / 10 / 3";
        }
        if (position === "02mobile") {
            return "8 / 1 / 9 / 3";
        }
        if (position === "03mobile") {
            return "1 / 1 / 2 / 3";
        }
    };
    const hidden = () => {
        if (!position.includes("00") && !position.includes("03")) {
            return "0.2";
        } else {
            return "1";
        }
    };
    return (
        <Box
            boxstyle={{ opacity: hidden() }}
            gridArea={gridarea()}
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
