import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";

const LanguageBox = ({ setPage, layout, disabled }: CardProps) => {
    const { gridArea, opacity } = layout;
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            disabled={disabled}
            onclick={() => setPage()}
        >
            <h2>語言</h2>
            <div className="mt-2">多益890分金色證書</div>
        </Box>
    );
};

export default LanguageBox;
