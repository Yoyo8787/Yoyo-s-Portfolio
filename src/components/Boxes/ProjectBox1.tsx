import { projects } from "../../data/projects";
import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";

const ProjectBox1 = ({ setPage, layout, disabled }: CardProps) => {
    const { gridArea, opacity } = layout;
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            disabled={disabled}
            onclick={() => setPage()}
        >
            <h2>實務經驗</h2>
            <h3>{projects.project1.cardTitle[0]}</h3>
            <img src={projects.project1.cover} alt="" className="transform-[rotate(-25deg)] w-48 relative top-4 left-12 rounded-sm" />
        </Box>
    );
};

export default ProjectBox1;
