import { contacts } from "../../data/contacts";
import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import { MdEmail } from "react-icons/md";

const EmailBox = ({ setPage, layout, disabled }: CardProps) => {
    const { gridArea, opacity } = layout;
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            disabled={disabled}
            onclick={() => setPage()}
        >
            <div className="h-full flex justify-center items-center gap-2">
                <MdEmail className="w-[15%] text-[2rem]" />
                <div className="text-[1rem]">{contacts.email}</div>
            </div>
        </Box>
    );
};

export default EmailBox;
