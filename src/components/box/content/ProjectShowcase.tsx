import type { Project, ShowcasePresentation } from "../../../types";
import { useTranslation } from "react-i18next";
import { projects, type ProjectId } from "../../../constants/projects";

interface ProjectShowcaseProps {
    projectId: ProjectId;
    titleId: string;
    presentation: ShowcasePresentation;
}

const ProjectShowcase = ({ projectId, presentation, titleId }: ProjectShowcaseProps) => {
    const { t } = useTranslation();
    const project: Project = projects[projectId](t);
    const isAngledCover = presentation === "angled-cover";
    const compact = presentation !== "cover";

    return (
        <div className={`relative h-full flex flex-col ${compact ? "gap-2" : "gap-3 pr-[54%] tablet:pr-0"}`}>
            <p className={`${compact ? "text-xs pr-8" : "text-sm tablet:pr-8"} ${isAngledCover ? "max-w-[50%]" : ""} text-primary-ink`}>{project.organization}</p>
            <h2 id={titleId} className={`${presentation === "compact" ? "tablet:line-clamp-2" : ""} ${compact ? "text-[0.85rem] leading-snug" : ""} ${isAngledCover ? "max-w-[50%]" : ""}`}>{project.cardTitle.join(" · ")}</h2>
            {project.cover && !compact && project.summary && (
                <p className="text-sm leading-relaxed tablet:hidden">{project.summary}</p>
            )}
            {/* 手機卡片太窄，大卡改成標題、圖片、標籤由上而下排列。 */}
            <ul className={`relative z-10 flex flex-wrap gap-1 list-none mt-auto ${isAngledCover ? "max-w-[50%]" : "tablet:order-4 tablet:mt-0"}`}>
                {project.tags?.slice(0, 2).map((tag) => (
                    <li key={tag} className="text-xs rounded-full px-2 py-1 bg-surface-2">{tag}</li>
                ))}
            </ul>
            {project.cover && (
                <img src={project.cover} alt={project.coverAlt ?? project.title}
                    className={`absolute top-0 ${isAngledCover ? "right-[-4%] w-[72%] rotate-6 pointer-events-none mask-[linear-gradient(to_right,transparent,black_40%)]" : "right-0 w-[50%] bg-surface-2/30 p-3 rounded-xl tablet:static tablet:order-3 tablet:w-full tablet:min-h-0 tablet:flex-1"} h-full object-contain`} />
            )}
        </div>
    );
};

export default ProjectShowcase;
