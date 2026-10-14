import { projects } from "../../../constants/projects";
import type { CardProps } from "../../../types";
import Layout from "../Layout";

const ProjectShowcase = ({ projectId, ...props }: CardProps & { projectId: string }) => {
    const project = projects[projectId];
    const isOnlineExam = projectId === "project2";
    const compact = !project.cover || isOnlineExam;

    return (
        <Layout {...props}>
            <div className={`relative h-full flex flex-col ${compact ? "gap-2" : "gap-3"}`}>
                <p className={`${compact ? "text-xs pr-8" : "text-sm mobile:pr-8"} ${isOnlineExam ? "max-w-[40%]" : ""} text-primary-ink`}>{project.organization}</p>
                <h3 className={`${compact ? "text-[0.85rem] leading-snug" : "max-w-[60%] mobile:max-w-full"} ${isOnlineExam ? "max-w-[40%]" : ""}`}>{project.cardTitle.join(" · ")}</h3>
                {project.cover && !compact && (
                    <p className="text-sm leading-relaxed max-w-[60%] mobile:hidden">{project.summary}</p>
                )}
                {/* 手機卡片太窄，大卡改成標題、圖片、標籤由上而下排列。 */}
                <ul className={`relative z-10 flex flex-wrap gap-1 list-none mt-auto ${isOnlineExam ? "max-w-[40%]" : "mobile:order-4 mobile:mt-0"}`}>
                    {project.tags?.map((tag) => (
                        <li key={tag} className="text-xs rounded-full px-2 py-1 bg-surface-2">{tag}</li>
                    ))}
                </ul>
                {project.cover && (
                    <img src={project.cover} alt={project.coverAlt ?? project.title}
                        className={`absolute top-0 ${isOnlineExam ? "right-[-4%] w-[72%] rotate-6 pointer-events-none mask-[linear-gradient(to_right,transparent,black_40%)]" : "right-0 w-[50%] seigaiha rounded-xl mobile:static mobile:order-3 mobile:w-full mobile:min-h-0 mobile:flex-1"} h-full object-contain`} />
                )}
            </div>
        </Layout>
    );
};

export default ProjectShowcase;
