import type { BoxConfig, ShowcasePresentation } from "../types";

// 各組位置依序為首頁、個人、專案、聯絡；只有有圖片的專案使用大卡。
const projectPlacements: [string, ShowcasePresentation, string[], string[]][] = [
    ["hexacalm", "cover",
        ["6 / 1 / 8 / 5", "6 / 1 / 8 / 5", "1 / 1 / 3 / 5", "6 / 1 / 8 / 5"],
        ["10 / 1 / 12 / 3", "10 / 1 / 12 / 3", "1 / 1 / 3 / 3", "10 / 1 / 12 / 3"]],
    ["project2", "angled-cover",
        ["1 / 3 / 2 / 5", "4 / 3 / 5 / 5", "3 / 1 / 4 / 3", "8 / 1 / 9 / 5"],
        ["6 / 1 / 7 / 3", "6 / 1 / 7 / 3", "3 / 1 / 4 / 3", "8 / 1 / 9 / 3"]],
    ["agentService", "compact",
        ["3 / 3 / 4 / 4", "4 / 2 / 5 / 3", "3 / 3 / 4 / 4", "5 / 2 / 6 / 3"],
        ["5 / 1 / 6 / 2", "5 / 2 / 6 / 3", "4 / 1 / 5 / 2", "7 / 2 / 8 / 3"]],
    ["visualWorkflow", "compact",
        ["3 / 4 / 4 / 5", "5 / 1 / 6 / 2", "3 / 4 / 4 / 5", "5 / 3 / 6 / 4"],
        ["5 / 2 / 6 / 3", "7 / 1 / 8 / 2", "4 / 2 / 5 / 3", "9 / 1 / 10 / 2"]],
    ["apiWorkspace", "compact",
        ["5 / 2 / 6 / 3", "5 / 2 / 6 / 3", "4 / 1 / 5 / 2", "5 / 4 / 6 / 5"],
        ["7 / 2 / 8 / 3", "7 / 2 / 8 / 3", "5 / 1 / 6 / 2", "9 / 2 / 10 / 3"]],
    ["project5", "compact",
        ["5 / 1 / 6 / 2", "4 / 1 / 5 / 2", "4 / 2 / 5 / 3", "5 / 1 / 6 / 2"],
        ["7 / 1 / 8 / 2", "5 / 1 / 6 / 2", "5 / 2 / 6 / 3", "7 / 1 / 8 / 2"]],
];

export const showcaseConfigs: Record<string, { presentation: ShowcasePresentation; config: BoxConfig }> = Object.fromEntries(
    projectPlacements.map(([id, presentation, desktop, mobile]) => [id, {
        presentation,
        config: {
            "00": { gridArea: desktop[0], disabled: false },
            "01": { gridArea: desktop[1], disabled: true },
            "02": { gridArea: desktop[2], disabled: false },
            "03": { gridArea: desktop[3], disabled: true },
            "00mobile": { gridArea: mobile[0], disabled: false },
            "01mobile": { gridArea: mobile[1], disabled: true },
            "02mobile": { gridArea: mobile[2], disabled: false },
            "03mobile": { gridArea: mobile[3], disabled: true },
        },
    }]),
);

export const githubBoxConfig: BoxConfig = {
    "00": { gridArea: "8 / 1 / 9 / 5", disabled: false },
    "01": { gridArea: "8 / 1 / 9 / 5", disabled: true },
    "02": { gridArea: "8 / 1 / 9 / 5", disabled: true },
    "03": { gridArea: "1 / 3 / 2 / 5", disabled: false },
    "00mobile": { gridArea: "9 / 1 / 10 / 3", disabled: false },
    "01mobile": { gridArea: "9 / 1 / 10 / 3", disabled: true },
    "02mobile": { gridArea: "11 / 1 / 12 / 3", disabled: true },
    "03mobile": { gridArea: "2 / 1 / 3 / 3", disabled: false },
};
export const emailBoxConfig: BoxConfig = {
    "00": { gridArea: "5 / 3 / 6 / 5", disabled: false },
    "01": { gridArea: "5 / 3 / 6 / 5", disabled: true },
    "02": { gridArea: "7 / 3 / 8 / 5", disabled: true },
    "03": { gridArea: "1 / 1 / 2 / 3", disabled: false },
    "00mobile": { gridArea: "8 / 1 / 9 / 3", disabled: false },
    "01mobile": { gridArea: "8 / 1 / 9 / 3", disabled: true },
    "02mobile": { gridArea: "10 / 1 / 11 / 3", disabled: true },
    "03mobile": { gridArea: "1 / 1 / 2 / 3", disabled: false },
};
// 碎念卡移除後，語言卡延伸佔滿原本兩格。
export const languageBoxConfig: BoxConfig = {
    "00": { gridArea: "4 / 3 / 5 / 5", disabled: false },
    "01": { gridArea: "3 / 3 / 4 / 5", disabled: false },
    "02": { gridArea: "7 / 1 / 8 / 3", disabled: true },
    "03": { gridArea: "2 / 3 / 3 / 5", disabled: true },
    "00mobile": { gridArea: "2 / 2 / 3 / 3", disabled: false },
    "01mobile": { gridArea: "2 / 2 / 3 / 3", disabled: false },
    "02mobile": { gridArea: "7 / 2 / 8 / 3", disabled: true },
    "03mobile": { gridArea: "4 / 2 / 5 / 3", disabled: true },
};
export const personalBoxConfig: BoxConfig = {
    "00": { gridArea: "1 / 1 / 2 / 3", disabled: false },
    "01": { gridArea: "1 / 1 / 2 / 3", disabled: false },
    "02": { gridArea: "4 / 3 / 5 / 5", disabled: true },
    "03": { gridArea: "2 / 1 / 3 / 3", disabled: true },
    "00mobile": { gridArea: "1 / 1 / 2 / 3", disabled: false },
    "01mobile": { gridArea: "1 / 1 / 2 / 3", disabled: false },
    "02mobile": { gridArea: "6 / 1 / 7 / 3", disabled: true },
    "03mobile": { gridArea: "3 / 1 / 4 / 3", disabled: true },
};
export const schoolBoxConfig: BoxConfig = {
    "00": { gridArea: "4 / 1 / 5 / 3", disabled: false },
    "01": { gridArea: "3 / 1 / 4 / 3", disabled: false },
    "02": { gridArea: "6 / 3 / 7 / 5", disabled: true },
    "03": { gridArea: "4 / 3 / 5 / 5", disabled: true },
    "00mobile": { gridArea: "4 / 1 / 5 / 3", disabled: false },
    "01mobile": { gridArea: "4 / 1 / 5 / 3", disabled: false },
    "02mobile": { gridArea: "9 / 1 / 10 / 3", disabled: true },
    "03mobile": { gridArea: "6 / 1 / 7 / 3", disabled: true },
};
export const skillBoxConfig: BoxConfig = {
    "00": { gridArea: "2 / 1 / 4 / 3", disabled: false },
    "01": { gridArea: "1 / 3 / 3 / 5", disabled: false },
    "02": { gridArea: "5 / 1 / 7 / 3", disabled: true },
    "03": { gridArea: "3 / 1 / 5 / 3", disabled: true },
    "00mobile": { gridArea: "2 / 1 / 3 / 2", disabled: false },
    "01mobile": { gridArea: "2 / 1 / 3 / 2", disabled: false },
    "02mobile": { gridArea: "7 / 1 / 8 / 2", disabled: true },
    "03mobile": { gridArea: "4 / 1 / 5 / 2", disabled: true },
};
export const jobBoxConfig: BoxConfig = {
    "00": { gridArea: "2 / 3 / 3 / 5", disabled: false },
    "01": { gridArea: "2 / 1 / 3 / 3", disabled: false },
    "02": { gridArea: "5 / 3 / 6 / 5", disabled: true },
    "03": { gridArea: "3 / 3 / 4 / 5", disabled: true },
    "00mobile": { gridArea: "3 / 1 / 4 / 3", disabled: false },
    "01mobile": { gridArea: "3 / 1 / 4 / 3", disabled: false },
    "02mobile": { gridArea: "8 / 1 / 9 / 3", disabled: true },
    "03mobile": { gridArea: "5 / 1 / 6 / 3", disabled: true },
};
