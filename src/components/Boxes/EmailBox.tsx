import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import { MdEmail } from "react-icons/md";
import { emailBoxConfig } from "../../assets/boxSetting";

const EmailBox = ({ setPage, position = "00" }: CardProps) => {
    const { gridArea, opacity } = emailBoxConfig[position];
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <div className="h-full flex justify-center items-center gap-2">
                <MdEmail className="w-[15%] text-[2rem]" />
                <div className="text-[1rem]">yoyo0918887333@gmail.com</div>
            </div>
        </Box>
    );
};

export default EmailBox;
