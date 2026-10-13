import { projects } from "../../data/projects";
import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";

const ProjectBox2 = ({ setPage, layout, disabled }: CardProps) => {
    const { gridArea, opacity } = layout;
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            disabled={disabled}
            onclick={() => setPage()}
        >
            <h2>實務經驗</h2>
            <h3>{projects.project2.cardTitle[0]}</h3>
            <img src={projects.project2.cover} alt="" className="transform-[rotate(-20deg)] w-120 relative -top-4 left-4 rounded-sm" />
        </Box>
    );
};

export default ProjectBox2;
