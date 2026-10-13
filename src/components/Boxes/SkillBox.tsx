import { skillIcons } from "../../data/skills";
import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";

const SkillBox = ({ setPage, layout, disabled }: CardProps) => {
    const { gridArea, opacity } = layout;

    return (
        <Box
            boxstyle={{ aspectRatio: "1 / 1", opacity: opacity }}
            gridArea={gridArea}
            disabled={disabled}
            onclick={() => setPage()}
        >
            <h2>技能</h2>
            <div className="flex flex-wrap justify-center gap-2 mt-4 h-[calc(100%_-_2rem)] w-full">
                {skillIcons.map((Icon, index) => (
                    <Icon
                        key={index}
                        className="w-[15%] text-[2rem] animate-float"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    />
                ))}
            </div>
        </Box>
    );
};

export default SkillBox;
