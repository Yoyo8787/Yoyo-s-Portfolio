import type { TFunction } from "i18next";
import type { SkillGroup } from "../types";
import type { IconType } from "react-icons";
import {
    FaPython,
    FaAws,
    FaDocker,
    FaGithub,
} from "react-icons/fa";
import {
    RiReactjsFill,
    RiTailwindCssFill,
    RiFirebaseFill,
    RiOpenaiFill,
} from "react-icons/ri";
import {
    SiNextdotjs,
    SiBlazor,
    SiMongodb,
    SiTsnode,
    SiKubernetes,
    SiTensorflow,
    SiClaude,
    SiModelcontextprotocol,
} from "react-icons/si";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { DiJavascript, DiRedis, DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoGoogleCloud, BiLogoUnity } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";



export const skillIcons = {
    OpenAI: RiOpenaiFill,
    Claude: SiClaude,
    "Model Context Protocol": SiModelcontextprotocol,
    HTML: IoLogoHtml5,
    CSS: IoLogoCss3,
    JavaScript: DiJavascript,
    React: RiReactjsFill,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": RiTailwindCssFill,
    "C#": TbBrandCSharp,
    Blazor: SiBlazor,
    MongoDB: SiMongodb,
    "SQL Server": DiMsqlServer,
    Firebase: RiFirebaseFill,
    Redis: DiRedis,
    Python: FaPython,
    "TypeScript / Node.js": SiTsnode,
    TensorFlow: SiTensorflow,
    GitHub: FaGithub,
    Docker: FaDocker,
    Kubernetes: SiKubernetes,
    "Google Cloud": BiLogoGoogleCloud,
    AWS: FaAws,
    VSCode: VscVscode,
    Unity: BiLogoUnity,
} satisfies Record<string, IconType>;

export const getSkillGroups = (t: TFunction) => ({
    ai: {
        title: t("skillGroups.ai.title"),
        items: {
            codex: t("skillGroups.ai.codex"),
            claude: t("skillGroups.ai.claude"),
            mcp: t("skillGroups.ai.mcp")
        }
    },
    languages: {
        title: t("skillGroups.languages.title"),
        items: {
            javascript: t("skillGroups.languages.javascript"),
            csharp: t("skillGroups.languages.csharp"),
            python: t("skillGroups.languages.python")
        }
    },
    frontend: {
        title: t("skillGroups.frontend.title"),
        items: {
            web: t("skillGroups.frontend.web"),
            react: t("skillGroups.frontend.react"),
            blazor: t("skillGroups.frontend.blazor"),
            cssFrameworks: t("skillGroups.frontend.cssFrameworks"),
            design: t("skillGroups.frontend.design")
        }
    },
    backend: {
        title: t("skillGroups.backend.title"),
        items: {
            node: t("skillGroups.backend.node"),
            dotnet: t("skillGroups.backend.dotnet")
        }
    },
    databases: {
        title: t("skillGroups.databases.title"),
        items: {
            mongodb: t("skillGroups.databases.mongodb"),
            sqlServer: t("skillGroups.databases.sqlServer"),
            firestore: t("skillGroups.databases.firestore"),
            redis: t("skillGroups.databases.redis")
        }
    },
    cloud: {
        title: t("skillGroups.cloud.title"),
        items: {
            gcp: t("skillGroups.cloud.gcp"),
            aws: t("skillGroups.cloud.aws")
        }
    },
    tools: {
        title: t("skillGroups.tools.title"),
        items: {
            vscode: t("skillGroups.tools.vscode"),
            unity: t("skillGroups.tools.unity"),
            git: t("skillGroups.tools.git"),
            cicd: t("skillGroups.tools.cicd"),
            containers: t("skillGroups.tools.containers")
        }
    },
    dataScience: {
        title: t("skillGroups.dataScience.title"),
        items: {
            models: t("skillGroups.dataScience.models"),
            deepLearning: t("skillGroups.dataScience.deepLearning"),
            data: t("skillGroups.dataScience.data"),
            visualization: t("skillGroups.dataScience.visualization")
        }
    }
} satisfies Record<string, SkillGroup>);
