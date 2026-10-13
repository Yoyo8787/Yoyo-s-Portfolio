import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";

const PersonalBox = ({ setPage, layout, disabled }: CardProps) => {
    const { gridArea, opacity } = layout;
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            disabled={disabled}
            onclick={() => {
                setPage();
            }}
        >
            <div className=" grid place-items-center h-full">
                <div>
                <h2 className="text-4xl">徐天祐</h2>
                <div className="ml-4">
                    前端工程師
                </div>
                </div>
            </div>
        </Box>
    );
};

export default PersonalBox;
