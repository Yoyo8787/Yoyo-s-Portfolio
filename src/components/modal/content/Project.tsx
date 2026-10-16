import type { ReactNode } from "react";
import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TbLock } from "react-icons/tb";
import type { Project as ProjectData, TextPart } from "../../../types";
import { projects, type ProjectId } from "../../../constants/projects";

const pad = (value: number) => String(value).padStart(2, "0");

const Section = ({ index, title, children }: { index: number; title: string; children: ReactNode }) => (
    <section className="grid grid-cols-[11rem_minmax(0,1fr)] gap-8 tablet:grid-cols-1 tablet:gap-2">
        <h3 className="m-0 flex items-baseline gap-2.5 text-base font-bold leading-relaxed">
            <span className="font-display font-normal text-[1.375rem] leading-none text-primary-ink">{pad(index)}</span>
            {title}
        </h3>
        <div className="max-w-160">{children}</div>
    </section>
);

interface ProjectProps {
    projectId: ProjectId;
    onPrevious: () => void;
    onNext: () => void;
}

const Project = ({ projectId, onPrevious, onNext }: ProjectProps) => {
    const { t } = useTranslation();
    const project: ProjectData = projects[projectId](t);
    const renderText = (parts: TextPart[]) => parts.map((part, index) => (
        <Fragment key={index}>{part.strong ? <b>{part.text}</b> : part.text}</Fragment>
    ));
    const isPersonal = project.isPersonal;
    const features = Object.entries(project.features);
    const hasFeatureImages = features.some(([, feature]) => feature.image);

    // ← → 切換專案；畫面上不顯示提示。
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") onPrevious();
            if (event.key === "ArrowRight") onNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onPrevious, onNext]);

    return (
        <article aria-labelledby="project-title" className="w-full">
            {!project.cover && (
                <div aria-hidden="true" className="seigaiha [--wave-a:#46293a] [--wave-b:#6b3f55] h-50 flex items-end px-12 pb-7 mobile:h-36 mobile:px-5 mobile:pb-5">
                    <span className="font-display text-[4.5rem] leading-[0.9] tracking-[0.02em] text-[#fedfe1] mobile:text-[2.75rem]">
                        {project.coverText ?? project.cardTitle[0]}
                    </span>
                </div>
            )}

            <div className={`flex flex-col gap-12 px-12 pb-14 mobile:px-5 mobile:pb-10 mobile:gap-9 ${project.cover ? "pt-16" : "pt-12 mobile:pt-7"}`}>
                <div className={`grid gap-10 items-start ${project.meta ? "grid-cols-[minmax(0,1fr)_17.5rem] tablet:grid-cols-1 tablet:gap-6" : ""}`}>
                    <div className="flex flex-col gap-3">
                        <span className="text-[0.8125rem] font-medium text-primary-ink">{project.organization}</span>
                        {isPersonal ? (
                            <>
                                <h2 id="project-title" className="m-0 font-display font-normal text-[4rem] leading-none tracking-[0.02em] mobile:text-[3rem]">
                                    {project.cardTitle[0].toUpperCase()}
                                </h2>
                                {project.cardTitle[1] && <p className="m-0 text-[1.375rem] font-bold leading-snug">{project.title.split("｜")[1] ?? project.cardTitle[1]}</p>}
                            </>
                        ) : (
                            <h2 id="project-title" className="m-0 text-[2.5rem] font-bold leading-tight mobile:text-[2rem]">{project.title}</h2>
                        )}
                        {project.summary && <p className="m-0 mt-1 text-base leading-[1.75] text-muted">{project.summary}</p>}
                        {project.tags && (
                            <ul className="list-none m-0 p-0 mt-2 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <li key={tag} className="px-3 py-0.5 rounded-full bg-surface-2 text-[0.8125rem]">{tag}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {project.meta && (
                        <div className="flex flex-col gap-4">
                            <dl className="m-0 pt-3 grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2.5 text-[0.875rem] leading-[1.6] border-0 border-t-2 border-solid border-primary">
                                {Object.entries(project.meta).map(([id, item]) => (
                                    <Fragment key={id}>
                                        <dt className="font-medium text-primary-ink">{item.label}</dt>
                                        <dd className="m-0">{item.value}</dd>
                                    </Fragment>
                                ))}
                            </dl>
                            {project.deidentified && (
                                <p className="m-0 flex gap-2 items-start text-[0.8125rem] leading-[1.6] text-muted">
                                    <TbLock aria-hidden="true" className="shrink-0 mt-0.5 text-base" />
                                    {t("project.deidentified")}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {project.cover && (
                    <img src={project.cover} alt={project.coverAlt ?? project.title}
                        className="block w-full h-110 object-cover rounded-xl border-2 border-solid border-ink mobile:h-52" />
                )}

                <Section index={1} title={t("project.introduction")}>
                    <p className="m-0 text-base leading-[1.75]">{renderText(project.introduction)}</p>
                </Section>

                <Section index={2} title={t("project.technology")}>
                    <p className="m-0 text-base leading-[1.75] text-muted">{renderText(project.technology)}</p>
                </Section>

                <Section index={3} title={project.featuresHeading ?? t("project.features")}>
                    {hasFeatureImages ? (
                        <ol className="list-none m-0 p-0 flex flex-col border-0 border-b-2 border-solid border-primary">
                            {features.map(([id, feature], featureIndex) => (
                                <li key={id} className="grid grid-cols-[3.5rem_minmax(0,1fr)_8rem] gap-5 py-5 items-start border-0 border-t-2 border-solid border-primary mobile:grid-cols-[2.5rem_minmax(0,1fr)] mobile:gap-3">
                                    <span className="font-display text-[2.25rem] leading-none text-primary-ink mobile:text-[1.75rem]">{pad(featureIndex + 1)}</span>
                                    <div className={feature.image ? "" : "col-span-2 mobile:col-span-1"}>
                                        {feature.title && <h4 className="m-0 mb-1 text-[1.125rem] font-bold">{feature.title.replace(/：$/, "")}</h4>}
                                        {feature.description && <p className="m-0 text-[0.9375rem] leading-[1.75] text-muted">{feature.description}</p>}
                                    </div>
                                    {feature.image && (
                                        <img src={feature.image} alt={feature.alt ?? ""}
                                            className="block w-32 h-32 object-contain bg-background rounded-xl mobile:col-start-2 mobile:w-full mobile:h-auto mobile:max-h-48" />
                                    )}
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <ol className="list-none m-0 p-0 grid grid-cols-2 gap-x-8 gap-y-7 mobile:grid-cols-1">
                            {features.map(([id, feature], featureIndex) => (
                                <li key={id} className="flex flex-col gap-1.5 pt-3.5 border-0 border-t-2 border-solid border-primary">
                                    <span className="font-display text-[1.75rem] leading-none text-primary-ink">{pad(featureIndex + 1)}</span>
                                    {feature.title && <h4 className="m-0 text-[1.125rem] font-bold">{feature.title.replace(/：$/, "")}</h4>}
                                    {feature.description && <p className="m-0 text-[0.9375rem] leading-[1.75] text-muted">{feature.description}</p>}
                                </li>
                            ))}
                        </ol>
                    )}
                </Section>

                <Section index={4} title={t("project.contribution")}>
                    <p className="m-0 text-base leading-[1.75]">{renderText(project.contribution)}</p>
                </Section>
            </div>
        </article>
    );
};

export default Project;
