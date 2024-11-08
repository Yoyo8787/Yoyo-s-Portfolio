import React from "react";
import Box from "../Box";
import style from "./BoxElement.module.css";
import { skillBoxConfig } from "../../assets/boxSetting";
import {
    FaNodeJs,
    FaPython,
    FaBootstrap,
    FaAws,
    FaDocker,
    FaGithub,
} from "react-icons/fa";
import {
    RiReactjsFill,
    RiTailwindCssFill,
    RiFirebaseFill,
} from "react-icons/ri";
import {
    SiNextdotjs,
    SiBlazor,
    SiMongodb,
    SiMicrosoftsqlserver,
    SiTsnode,
    SiKubernetes,
    SiTensorflow,
    SiJupyter,
} from "react-icons/si";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { DiJavascript, DiRedis } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoGoogleCloud, BiLogoUnity } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

const SkillBox = ({ setPage, position = "00" }) => {
    const { gridArea, opacity } = skillBoxConfig[position] || {};

    const icons = [
        IoLogoHtml5,
        IoLogoCss3,
        DiJavascript,
        RiReactjsFill,
        SiNextdotjs,
        RiTailwindCssFill,
        FaBootstrap,
        FaNodeJs,
        TbBrandCSharp,
        SiBlazor,
        SiMongodb,
        SiMicrosoftsqlserver,
        RiFirebaseFill,
        DiRedis,
        FaPython,
        SiTsnode,
        SiTensorflow,
        SiJupyter,
        FaGithub,
        FaDocker,
        SiKubernetes,
        BiLogoGoogleCloud,
        FaAws,
        VscVscode,
        BiLogoUnity,
    ];

    return (
        <Box
            boxstyle={{ aspectRatio: "1 / 1", opacity: opacity }}
            gridArea={gridArea}
            onclick={() => setPage()}
        >
            <h2>技能</h2>
            <div className={style.iconContainer}>
                {icons.map((Icon, index) => (
                    <Icon
                        key={index}
                        className={style.floatIcon}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    />
                ))}
            </div>
        </Box>
    );
};

export default SkillBox;
