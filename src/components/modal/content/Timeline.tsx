import { useState } from "react";
import { jobs, schools } from "../../../constants/experience";
import DetailHeader from "../DetailHeader";

type Tab = "job" | "school";

const tabs: { id: Tab; label: string }[] = [
    { id: "job", label: "工作經歷" },
    { id: "school", label: "學歷" },
];

// "2025-Now" → "2025 — NOW"；起訖同年只顯示一次。
const formatPeriod = (period: string) => {
    const [start, end] = period.split(/-(.*)/s);
    if (!end || start === end) return start;
    return `${start} — ${end.toUpperCase()}`;
};

const Timeline = ({ initialTab }: { initialTab: Tab }) => {
    const [tab, setTab] = useState<Tab>(initialTab);
    const entries = [...(tab === "job" ? jobs : schools)].reverse();

    return (
        <div className="w-full">
            <DetailHeader id="timeline-title" title="經歷" />
            <div className="px-10 pb-10 mobile:px-5">
                <div className="mt-5 inline-grid grid-cols-2 gap-1 p-1 border-2 border-solid border-primary rounded-full bg-surface shadow-[0.25rem_0.25rem_0_var(--shadowcolor)]">
                    {tabs.map((item) => (
                        <button key={item.id} type="button" aria-pressed={tab === item.id}
                            className={`min-h-11 px-6 rounded-full border-0 cursor-pointer text-[0.9375rem] text-foreground transition-colors duration-120 ${tab === item.id ? "bg-primary text-on-primary font-bold" : "bg-transparent hover:bg-surface-2"}`}
                            onClick={() => setTab(item.id)}>
                            {item.label}
                        </button>
                    ))}
                </div>

                <ol className="list-none m-0 p-0 mt-8">
                    {entries.map((entry, index) => {
                        const isLatest = index === 0;
                        const isLast = index === entries.length - 1;
                        return (
                            <li key={`${entry.organization}-${entry.period}`}
                                className="grid grid-cols-[9.5rem_1.75rem_minmax(0,1fr)] gap-x-5 pb-7 mobile:grid-cols-[1.75rem_minmax(0,1fr)] mobile:gap-x-3 mobile:pb-5">
                                <div className="font-display text-[1.75rem] leading-tight text-primary-ink text-right pt-4 mobile:col-start-2 mobile:text-left mobile:pt-0 mobile:pb-1 mobile:text-[1.25rem]">
                                    {formatPeriod(entry.period)}
                                </div>
                                <div className="relative flex justify-center mobile:row-start-1 mobile:row-span-2 mobile:col-start-1">
                                    {!isLast && <div aria-hidden="true" className="absolute top-7 -bottom-7 w-0.5 bg-primary" />}
                                    <div aria-hidden="true" className={`relative mt-5 size-4.5 rounded-full border-2 border-solid ${isLatest ? "bg-[#f9bf45] border-[#1c1c1c]" : "bg-surface border-primary"}`} />
                                </div>
                                <div className={`px-5 py-4 rounded-2xl flex flex-col gap-0.5 mobile:col-start-2 ${isLatest ? "bg-surface-2" : "border-2 border-dashed border-primary"}`}>
                                    <span className="text-[1.375rem] font-bold leading-snug">{entry.organization}</span>
                                    {entry.details.map((detail) => (
                                        <span key={detail} className="text-base">{detail}</span>
                                    ))}
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
};

export default Timeline;
