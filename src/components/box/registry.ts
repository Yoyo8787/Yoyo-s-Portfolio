import { contacts } from "../../constants/contacts";
import type { ComponentType } from "react";
import type { BoxConfig, CardAction, CardProps } from "../../types";
import * as configs from "../../constants/boxLayouts";
import Project_OnlineExam from "./content/Project_OnlineExam";
import Project_ChatbotConfig from "./content/Project_ChatbotConfig";
import Personal from "./content/Personal";
import School from "./content/School";
import Skill from "./content/Skill";
import Job from "./content/Job";
import Language from "./content/Language";
import Email from "./content/Email";
import Github from "./content/Github";
import Murmur from "./content/Murmur";

interface CardDefinition {
    id: string;
    component: ComponentType<CardProps>;
    config: BoxConfig;
    action: CardAction;
}

export const cardRegistry: CardDefinition[] = [
    { id: "project5", component: Project_ChatbotConfig, config: configs.chatbotConfig, action: { type: "content", contentId: "project5" } },
    { id: "project2", component: Project_OnlineExam, config: configs.onlineExamConfig, action: { type: "content", contentId: "project2" } },
    { id: "language", component: Language, config: configs.languageBoxConfig, action: { type: "none" } },
    { id: "school", component: School, config: configs.schoolBoxConfig, action: { type: "content", contentId: "school" } },
    { id: "personal", component: Personal, config: configs.personalBoxConfig, action: { type: "content", contentId: "personal" } },
    { id: "skill", component: Skill, config: configs.skillBoxConfig, action: { type: "content", contentId: "skill" } },
    { id: "email", component: Email, config: configs.emailBoxConfig, action: { type: "copy", text: contacts.email } },
    { id: "github", component: Github, config: configs.githubBoxConfig, action: { type: "link", url: contacts.github } },
    { id: "job", component: Job, config: configs.jobBoxConfig, action: { type: "content", contentId: "job" } },
    { id: "murmur", component: Murmur, config: configs.murmurBoxConfig, action: { type: "none" } },
];
