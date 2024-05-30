import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneBox = ({ setPage, position = "00" }) => {
    const gridarea = () => {
        if (position === "00") {
            return "2 / 2 / 3 / 3";
        }
        if (position === "01") {
            return "1 / 4 / 2 / 5";
        }
        if (position === "02") {
            return "5 / 1 / 6 / 2";
        }
        if (position === "03") {
            return "1 / 1 / 2 / 2";
        }
        if (position === "00mobile") {
            return "2 / 2 / 3 / 3";
        }
        if (position === "01mobile") {
            return "4 / 1 / 5 / 2";
        }
        if (position === "02mobile") {
            return "6 / 1 / 7 / 2";
        }
        if (position === "03mobile") {
            return "2 / 1 / 3 / 2";
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
            boxstyle={{ aspectRatio: "1 / 1", opacity: hidden() }}
            gridArea={gridarea()}
            onclick={() => setPage()}
        >
            <div className={style.iconbox}>
                <FaPhoneAlt className={style.largeicon} />
                <div>0918887333</div>
            </div>
        </Box>
    );
};

export default PhoneBox;
