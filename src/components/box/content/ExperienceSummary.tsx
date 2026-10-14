import type { TimelineEntry } from "../../../types";

interface ExperienceSummaryProps {
    title: string;
    entries: readonly TimelineEntry[];
}

const ExperienceSummary = ({ title, entries }: ExperienceSummaryProps) => (
    <>
        <h2>{title}</h2>
        <ul className="max-w-full pt-2 gap-4 [&>li]:ml-4 [&>li]:mb-1">
            {[...entries].reverse().map((entry) => (
                <li key={`${entry.organization}-${entry.period}`}>{entry.summary}</li>
            ))}
        </ul>
    </>
);

export default ExperienceSummary;
