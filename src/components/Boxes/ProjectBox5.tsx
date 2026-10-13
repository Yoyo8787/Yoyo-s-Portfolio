import { projects } from "../../data/projects";
import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";

const ProjectBox5 = ({ setPage, layout, disabled }: CardProps) => {
    const { gridArea, opacity } = layout;
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            disabled={disabled}
            onclick={() => setPage()}
        >
            <h2>實務經驗</h2>
            <h3>{projects.project5.cardTitle[0]}<br />{projects.project5.cardTitle[1]}</h3>
        </Box>
    );
};

export default ProjectBox5;
