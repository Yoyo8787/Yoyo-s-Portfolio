import type { IconType } from "react-icons";
import type { SkillGroup } from "../types";
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
    SiTsnode,
    SiKubernetes,
    SiTensorflow,
    SiJupyter,
} from "react-icons/si";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { DiJavascript, DiRedis, DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoGoogleCloud, BiLogoUnity } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";


export const skillGroups: SkillGroup[] = [
    { title: "程式語言", items: ["JavaScript (TypeScript)", "C#", "Python"] },
    { title: "前端", items: ["HTML, CSS, JavaScript", "React (Next.js)", "Blazor (Razor)", "Tailwind, Bootstrap", "RWD, Figma"] },
    { title: "後端", items: ["Node.js (Express, Fastify)", "ASP.NET (WebForm, Blazor)"] },
    { title: "資料庫", items: ["MongoDB", "SQL Server", "FireStore form Firebase", "Redis"] },
    { title: "雲端環境", items: ["GCP (GKE)", "AWS (EC2, S3 Bucket)"] },
    { title: "開發環境與工具", items: ["VSCode", "Unity", "Git/Github", "CI/CD (Github Action)", "Docker, Kubernetes"] },
    { title: "資料分析與機器學習", items: ["scikit-learn, XGBoost", "TensorFlow, PyTorch", "Pandas, NumPy", "Matplotlib"] },
];

export const skillIcons: IconType[] = [
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
        DiMsqlServer,
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
