import { contacts } from "../../data/contacts";
import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneBox = ({ setPage, layout, disabled }: CardProps) => {
    const { gridArea, opacity } = layout;
    return (
        <Box
            boxstyle={{ aspectRatio: "1 / 1", opacity: opacity }}
            gridArea={gridArea}
            disabled={disabled}
            onclick={() => setPage()}
        >
            <div className="h-full flex justify-center items-center gap-2">
                <FaPhoneAlt className="w-[15%] text-[2rem]" />
                <div>{contacts.phone}</div>
            </div>
        </Box>
    );
};

export default PhoneBox;
