import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import { FaPhoneAlt } from "react-icons/fa";
import { phoneBoxConfig } from "../../assets/boxSetting";

const PhoneBox = ({ setPage, position = "00" }: CardProps) => {
    const { gridArea, opacity } = phoneBoxConfig[position];
    return (
        <Box
            boxstyle={{ aspectRatio: "1 / 1", opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <div className="h-full flex justify-center items-center gap-2">
                <FaPhoneAlt className="w-[15%] text-[2rem]" />
                <div>0918887333</div>
            </div>
        </Box>
    );
};

export default PhoneBox;
