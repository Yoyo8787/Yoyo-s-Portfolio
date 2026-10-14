import { Fragment } from "react";
import type { Project as ProjectData, TextPart } from "../../../types";

const renderText = (parts: TextPart[]) => parts.map((part, index) => (
    <Fragment key={index}>{part.strong ? <b>{part.text}</b> : part.text}</Fragment>
));

const Project = ({ project }: { project: ProjectData }) => (
    <div className="w-140 max-w-[80vw] [&>h4]:mb-3 [&>p]:mt-1">
        <h2 className="pr-12">{project.title}</h2>
        <h4>{project.organization}</h4>
        {project.cover && project.summary && (
            <img src={project.cover} alt={project.coverAlt ?? project.title}
                className="w-full max-h-80 object-contain rounded-lg mb-4" />
        )}
        <p>{renderText(project.introduction)}</p>
        <h3 className="mt-6">技術和工具</h3>
        <p>{renderText(project.technology)}</p>
        <h3 className="mt-6">{project.featuresHeading ?? "主要功能"}</h3>
        <ul>
            {project.features.map((feature, index) => (
                <li key={index} className={`flex gap-4 mt-2 items-center [&>img]:w-40 [&>img]:rounded-lg ${project.featuresHeading ? "mobile:flex-col mobile:items-start mb-4 leading-relaxed" : ""}`}
                    style={feature.fullWidth ? { maxWidth: "90%" } : undefined}>
                    {feature.title && (
                        <div><b>{feature.title}</b><div>{feature.description}</div></div>
                    )}
                    {feature.image && (
                        <img src={feature.image} alt={feature.alt ?? ""}
                            style={feature.fullWidth ? { width: "100%" } : undefined} />
                    )}
                </li>
            ))}
        </ul>
        <h3 className="mt-6">個人貢獻</h3>
        <p>{renderText(project.contribution)}</p>
    </div>
);

export default Project;
