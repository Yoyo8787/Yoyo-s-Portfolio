import type { TFunction } from "i18next";
import type { TimelineEntry } from "../types";

// 統一由新到舊；同年開始時，仍在進行或較晚結束的經歷優先。
const newestFirst = (a: TimelineEntry, b: TimelineEntry) =>
    b.startYear - a.startYear || (b.endYear ?? Infinity) - (a.endYear ?? Infinity) || 0;

export const getJobs = (t: TFunction): TimelineEntry[] => [
    {
        id: "sanyuan",
        startYear: 2020,
        endYear: 2024,
        organization: t("jobs.sanyuan.organization"),
        details: [
            t("jobs.sanyuan.role")
        ],
        summary: t("jobs.sanyuan.summary")
    },
    {
        id: "deepq",
        startYear: 2024,
        endYear: 2024,
        organization: t("jobs.deepq.organization"),
        details: [
            t("jobs.deepq.role")
        ],
        summary: t("jobs.deepq.summary")
    },
    {
        id: "perfect",
        startYear: 2025,
        endYear: null,
        organization: t("jobs.perfect.organization"),
        details: [
            t("jobs.perfect.role")
        ],
        summary: t("jobs.perfect.summary")
    }
].sort(newestFirst);

export const getSchools = (t: TFunction): TimelineEntry[] => [
    {
        id: "jianguo",
        startYear: 2015,
        endYear: 2018,
        organization: t("schools.jianguo.organization"),
        details: [],
        summary: t("schools.jianguo.summary")
    },
    {
        id: "ntuForestry",
        startYear: 2018,
        endYear: 2023,
        organization: t("schools.ntuForestry.organization"),
        details: [
            t("schools.ntuForestry.program")
        ],
        summary: t("schools.ntuForestry.summary")
    },
    {
        id: "ntuInformationManagement",
        startYear: 2024,
        endYear: 2025,
        organization: t("schools.ntuInformationManagement.organization"),
        details: [
            t("schools.ntuInformationManagement.program"),
            t("schools.ntuInformationManagement.lab")
        ],
        summary: t("schools.ntuInformationManagement.summary")
    }
].sort(newestFirst);
