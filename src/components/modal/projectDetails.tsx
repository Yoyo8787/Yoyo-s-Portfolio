import { projects, type ProjectId } from "../../constants/projects";
import type { DetailDefinition } from "../../types";
import Project from "./content/Project";

const projectIds = Object.keys(projects) as ProjectId[];

const projectDetails = projectIds.map<DetailDefinition>((id, index) => ({
    id,
    titleId: "project-title",
    size: "lg",
    render: (onNavigate) => (
        <Project
            projectId={id}
            onPrevious={() => onNavigate(projectDetails[(index - 1 + projectDetails.length) % projectDetails.length])}
            onNext={() => onNavigate(projectDetails[(index + 1) % projectDetails.length])}
        />
    ),
}));

export const getProjectDetail = (id: ProjectId): DetailDefinition =>
    projectDetails[projectIds.indexOf(id)];
