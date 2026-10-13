import { schools } from "../../data/experience";
import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
const SchoolBox = ({ setPage, layout, disabled }: CardProps) => {
    const { gridArea, opacity } = layout;
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            disabled={disabled}
            onclick={() => setPage()}
        >
            <h2>學歷</h2>
            <ul className="max-w-full pt-2 gap-4 [&>li]:ml-4 [&>li]:mb-1">
                {schools.slice().reverse().map((entry) => <li key={`${entry.organization}-${entry.period}`}>{entry.summary}</li>)}
            </ul>
        </Box>
    );
};

export default SchoolBox;
