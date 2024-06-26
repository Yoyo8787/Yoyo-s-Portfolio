import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";

const SkillBox = ({ setPage, position = "00" }) => {
    const gridarea = () => {
        if (position === "00") {
            return "2 / 1 / 3 / 2";
        }
        if (position === "01") {
            return "1 / 3 / 4 / 4";
        }
        if (position === "02") {
            return "4 / 1 / 5 / 2";
        }
        if (position === "03") {
            return "2 / 3 / 3 / 4";
        }
        if (position === "00mobile") {
            return "2 / 1 / 3 / 2";
        }
        if (position === "01mobile") {
            return "2 / 1 / 3 / 2";
        }
        if (position === "02mobile") {
            return "6 / 2 / 7 / 3";
        }
        if (position === "03mobile") {
            return "2 / 2 / 3 / 3";
        }
    };
    const hidden = () => {
        if (!position.includes("00") && !position.includes("01")) {
            return "0.2";
        } else {
            return "1";
        }
    };
    return (
        <Box
            boxstyle={{ aspectRatio: "1 / 1", opacity: hidden() }}
            gridArea={gridarea()}
            onclick={() => setPage()}
        >
            <h2>技能</h2>
            <ul className={style.list}>
                <li>HTML, CSS, JS</li>
                <li>React, Next.js</li>
                <li>Node.js, Express.js</li>
                <li>SQL Server, MongoDB</li>
            </ul>
        </Box>
    );
};

export default SkillBox;
