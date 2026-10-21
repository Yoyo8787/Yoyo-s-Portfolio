import { useTranslation } from "react-i18next";
import { getJobs, getSchools } from "../../../constants/experience";

interface ExperienceSummaryProps {
    titleId: string;
    kind: "job" | "school";
}

const ExperienceSummary = ({ titleId, kind }: ExperienceSummaryProps) => {
    const { t } = useTranslation();
    const isJob = kind === "job";
    const schoolRoles: Record<string, string> = {
        ntuInformationManagement: t("experience.im"),
        ntuForestry: t("experience.forestry"),
    };
    const entries = (isJob ? getJobs(t) : getSchools(t)).slice(0, 2);

    return (
        <div className="flex flex-col h-full gap-8">
            <h2 id={titleId} className="compact:text-lg leading-tight">{t(isJob ? "work" : "education")}</h2>
            <ul className="list-none grid gap-2 compact:gap-1 text-sm compact:text-xs leading-tight">
                {entries.map((entry) => (
                    <li key={entry.id} className="grid grid-cols-[6rem_minmax(0,1fr)] compact:grid-cols-[4rem_minmax(0,1fr)] gap-3 compact:gap-2">
                        <span className="font-display text-primary-ink text-lg compact:text-sm">
                            {entry.startYear}{entry.endYear === null ? "—" : ""}
                        </span>
                        <div className="min-w-0">
                            <p className="font-bold">{isJob ? entry.details[0] : schoolRoles[entry.id]}</p>
                            <p className="text-muted">{isJob ? entry.summary : t("experience.ntu")}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceSummary;
