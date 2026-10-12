import type { CardProps } from "../../types";
import React from "react";
import Box from "../Box";
import { FaGithub } from "react-icons/fa";
import { githubBoxConfig } from "../../assets/boxSetting";

const GithubBox = ({ setPage, position = "00" }: CardProps) => {
    const { gridArea, opacity } = githubBoxConfig[position];
    return (
        <Box
            boxstyle={{ opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <div className="h-full flex justify-center items-center gap-2">
                <FaGithub className="w-[15%] text-[2rem]" />
                <div className="text-[1rem]">github.com/Yoyo8787</div>
            </div>
        </Box>
    );
};

export default GithubBox;
