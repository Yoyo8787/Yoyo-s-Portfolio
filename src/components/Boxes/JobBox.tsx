import { jobs } from "../../data/experience";
import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
const JobBox = ({ setPage, layout, disabled }: CardProps) => {
    const { gridArea, opacity } = layout;
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            disabled={disabled}
            onclick={() => setPage()}
        >
            <h2>工作經驗</h2>
            <ul className="max-w-full pt-2 gap-4 [&>li]:ml-4 [&>li]:mb-1">
                {jobs.slice().reverse().map((entry) => <li key={entry.organization}>{entry.summary}</li>)}
            </ul>
        </Box>
    );
};

export default JobBox;
