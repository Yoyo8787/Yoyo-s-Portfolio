import { contacts } from "../../constants/contacts";
import type { ComponentType } from "react";
import { createElement } from "react";
import type { BoxConfig, CardAction, CardProps } from "../../types";
import * as configs from "../../constants/boxLayouts";
import Personal from "./content/Personal";
import School from "./content/School";
import Skill from "./content/Skill";
import Job from "./content/Job";
import Language from "./content/Language";
import Email from "./content/Email";
import Github from "./content/Github";
import Murmur from "./content/Murmur";
import ProjectShowcase from "./content/ProjectShowcase";

interface CardDefinition {
    id: string;
    component: ComponentType<CardProps>;
    config: BoxConfig;
    action: CardAction;
}

export const cardRegistry: CardDefinition[] = [
    ...Object.entries(configs.showcaseConfigs).map(([id, config]) => ({
        id,
        component: (props: CardProps) => createElement(ProjectShowcase, { ...props, projectId: id }),
        config,
        action: { type: "content" as const, contentId: id },
    })),
    { id: "language", component: Language, config: configs.languageBoxConfig, action: { type: "none" } },
    { id: "school", component: School, config: configs.schoolBoxConfig, action: { type: "content", contentId: "school" } },
    { id: "personal", component: Personal, config: configs.personalBoxConfig, action: { type: "content", contentId: "personal" } },
    { id: "skill", component: Skill, config: configs.skillBoxConfig, action: { type: "content", contentId: "skill" } },
    { id: "email", component: Email, config: configs.emailBoxConfig, action: { type: "copy", text: contacts.email } },
    { id: "github", component: Github, config: configs.githubBoxConfig, action: { type: "link", url: contacts.github } },
    { id: "job", component: Job, config: configs.jobBoxConfig, action: { type: "content", contentId: "job" } },
    { id: "murmur", component: Murmur, config: configs.murmurBoxConfig, action: { type: "none" } },
];
