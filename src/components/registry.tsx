import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contacts } from "../constants/contacts";
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
import { getProjectDetail } from "./modal/projectDetails";

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

const jobDetail: DetailDefinition = {
    id: "job",
    titleId: "timeline-title",
    size: "sm",
    render: () => <Timeline initialTab="job" />,
};

const schoolDetail: DetailDefinition = {
    id: "school",
    titleId: "timeline-title",
    size: "sm",
    render: () => <Timeline initialTab="school" />,
};

export const useCardRegistry = (): CardDefinition[] => {

    return [
        ...configs.showcaseConfigs.map(({ id, config, presentation }) => ({
            id,
            content: <ProjectShowcase projectId={id} presentation={presentation} titleId={`card-${id}-title`} />,
            config,
            action: { type: "content" as const, detail: getProjectDetail(id) },
        })),
        { id: "language", content: <Language />, config: configs.languageBoxConfig, action: { type: "none" } },
        { id: "personal", content: <PersonalSummary titleId="card-personal-title" />, config: configs.personalBoxConfig, action: { type: "content", detail: personalDetail } },
        { id: "skill", content: <SkillSummary titleId="card-skill-title" />, config: configs.skillBoxConfig, action: { type: "content", detail: skillDetail } },
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
        { id: "job", content: <ExperienceSummary titleId="card-job-title" kind="job" />, config: configs.jobBoxConfig, action: { type: "content", detail: jobDetail } },
        { id: "school", content: <ExperienceSummary titleId="card-school-title" kind="school" />, config: configs.schoolBoxConfig, action: { type: "content", detail: schoolDetail } },
    ];
};
