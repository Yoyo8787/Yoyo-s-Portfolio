import { contacts } from "./contacts";
import type { ComponentType } from "react";
import type { BoxConfig, CardAction, CardProps } from "../types";
import * as configs from "../assets/boxSetting";
import ProjectBox1 from "../components/Boxes/ProjectBox1";
import ProjectBox2 from "../components/Boxes/ProjectBox2";
import ProjectBox3 from "../components/Boxes/ProjectBox3";
import ProjectBox4 from "../components/Boxes/ProjectBox4";
import ProjectBox5 from "../components/Boxes/ProjectBox5";
import PersonalBox from "../components/Boxes/PersonalBox";
import SchoolBox from "../components/Boxes/SchoolBox";
import SkillBox from "../components/Boxes/SkillBox";
import JobBox from "../components/Boxes/JobBox";
import LanguageBox from "../components/Boxes/LanguageBox";
import PhoneBox from "../components/Boxes/PhoneBox";
import EmailBox from "../components/Boxes/EmailBox";
import GithubBox from "../components/Boxes/GithubBox";
import MurmurBox from "../components/Boxes/MurmurBox";

interface CardDefinition {
    id: string;
    component: ComponentType<CardProps>;
    config: BoxConfig;
    action: CardAction;
}

export const cards: CardDefinition[] = [
    { id: "project5", component: ProjectBox5, config: configs.projectBox5Config, action: { type: "content", contentId: "project5" } },
    { id: "project4", component: ProjectBox4, config: configs.projectBox4Config, action: { type: "content", contentId: "project4" } },
    { id: "project3", component: ProjectBox3, config: configs.projectBox3Config, action: { type: "content", contentId: "project3" } },
    { id: "project2", component: ProjectBox2, config: configs.projectBox2Config, action: { type: "content", contentId: "project2" } },
    { id: "project1", component: ProjectBox1, config: configs.projectBox1Config, action: { type: "content", contentId: "project1" } },
    { id: "language", component: LanguageBox, config: configs.languageBoxConfig, action: { type: "none" } },
    { id: "school", component: SchoolBox, config: configs.schoolBoxConfig, action: { type: "content", contentId: "school" } },
    { id: "personal", component: PersonalBox, config: configs.personalBoxConfig, action: { type: "content", contentId: "personal" } },
    { id: "skill", component: SkillBox, config: configs.skillBoxConfig, action: { type: "content", contentId: "skill" } },
    { id: "phone", component: PhoneBox, config: configs.phoneBoxConfig, action: { type: "copy", text: contacts.phone } },
    { id: "email", component: EmailBox, config: configs.emailBoxConfig, action: { type: "copy", text: contacts.email } },
    { id: "github", component: GithubBox, config: configs.githubBoxConfig, action: { type: "link", url: contacts.github } },
    { id: "job", component: JobBox, config: configs.jobBoxConfig, action: { type: "content", contentId: "job" } },
    { id: "murmur", component: MurmurBox, config: configs.murmurBoxConfig, action: { type: "none" } },
];
