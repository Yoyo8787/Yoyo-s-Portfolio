import { Fragment } from "react";
import type { TimelineEntry } from "../../types";

const Timeline = ({ title, entries }: { title: string; entries: TimelineEntry[] }) => (
    <div>
        <h2>{title}</h2>
        <ul className="list-none p-0">
            {entries.map((entry) => (
                <li key={`${entry.organization}-${entry.period}`} className="border-l-3 [border-left-style:solid] border-secondary my-2.5 p-5 relative">
                    <label className="w-3.75 h-3.75 bg-secondary rounded-full absolute -left-2 top-5"></label>
                    <div className="mb-1.25 font-bold text-foreground">{entry.period}</div>
                    <div className="mb-1.25 text-[18px] font-bold">{entry.organization}</div>
                    {entry.details.length > 0 && (
                        <div className="text-[16px] text-foreground">
                            {entry.details.map((detail, index) => (
                                <Fragment key={index}>{index > 0 && <br />}{detail}</Fragment>
                            ))}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

export default Timeline;
