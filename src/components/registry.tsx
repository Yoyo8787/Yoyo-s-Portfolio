import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contacts } from "../constants/contacts";
import { jobs, schools } from "../constants/experience";
import { projects } from "../constants/projects";
import * as configs from "../constants/boxLayouts";
import type { BoxConfig, CardAction, CardInteraction, CardTone, DetailDefinition } from "../types";
import PersonalSummary from "./box/content/Personal";
import SkillSummary from "./box/content/Skill";
import Language from "./box/content/Language";
import ContactSummary from "./box/content/ContactSummary";
import ExperienceSummary from "./box/content/ExperienceSummary";
import ProjectShowcase from "./box/content/ProjectShowcase";
import Personal from "./modal/content/Personal";
import Skill from "./modal/content/Skill";
import Timeline from "./modal/content/Timeline";
import Project from "./modal/content/Project";

interface CardDefinition {
    id: string;
    content: ReactElement;
    config: BoxConfig;
    action: CardAction;
    tone?: CardTone;
}

export const getCardInteraction = (action: CardAction, onNavigate: (detail: DetailDefinition) => void): CardInteraction => {
    switch (action.type) {
        case "content": return { type: "content", onActivate: () => onNavigate(action.detail) };
        case "link": return { type: "link", href: action.url };
        case "none": return { type: "none" };
    }
};

const personalDetail: DetailDefinition = {
    id: "personal",
    titleId: "personal-title",
    size: "md",
    render: () => <Personal />,
};

const skillDetail: DetailDefinition = {
    id: "skill",
    titleId: "skills-title",
    size: "xl",
    render: () => <Skill />,
};

const schoolDetail: DetailDefinition = {
    id: "school",
    titleId: "timeline-title",
    size: "sm",
    render: () => <Timeline initialTab="school" />,
};

const jobDetail: DetailDefinition = {
    id: "job",
    titleId: "timeline-title",
    size: "sm",
    render: () => <Timeline initialTab="job" />,
};

const projectDetails = Object.entries(projects).map<DetailDefinition>(([id, project], index) => ({
    id,
    titleId: "project-title",
    size: "lg",
    render: (onNavigate) => (
        <Project
            project={project}
            onPrevious={() => onNavigate(projectDetails[(index - 1 + projectDetails.length) % projectDetails.length])}
            onNext={() => onNavigate(projectDetails[(index + 1) % projectDetails.length])}
        />
    ),
}));

const projectDetailsById = new Map(projectDetails.map((detail) => [detail.id, detail]));

export const cardRegistry: CardDefinition[] = [
    ...Object.entries(configs.showcaseConfigs).map(([id, { config, presentation }]) => ({
        id,
        content: <ProjectShowcase project={projects[id]} presentation={presentation} />,
        config,
        action: { type: "content" as const, detail: projectDetailsById.get(id)! },
    })),
    { id: "language", content: <Language />, config: configs.languageBoxConfig, action: { type: "none" } },
    { id: "school", content: <ExperienceSummary title="學歷" entries={schools} />, config: configs.schoolBoxConfig, action: { type: "content", detail: schoolDetail } },
    { id: "personal", content: <PersonalSummary />, config: configs.personalBoxConfig, action: { type: "content", detail: personalDetail } },
    { id: "skill", content: <SkillSummary />, config: configs.skillBoxConfig, action: { type: "content", detail: skillDetail } },
    {
        id: "email",
        content: <ContactSummary icon={MdEmail} label={contacts.email} />,
        config: configs.emailBoxConfig,
        action: { type: "link", url: `mailto:${contacts.email}` },
    },
    {
        id: "github",
        content: <ContactSummary icon={FaGithub} label={contacts.github.replace(/^https?:\/\//, "")} labelClassName="text-[1.25rem] font-display tracking-wide" />,
        config: configs.githubBoxConfig,
        action: { type: "link", url: contacts.github },
        tone: "ink",
    },
    { id: "job", content: <ExperienceSummary title="工作經驗" entries={jobs} />, config: configs.jobBoxConfig, action: { type: "content", detail: jobDetail } },
];
