import type { TFunction } from "i18next";

export const getPersonalFacts = (t: TFunction) => ({
    work: {
        label: t("personal.facts.work.label"),
        title: t("personal.facts.work.title"),
        detail: t("personal.facts.work.detail")
    },
    education: {
        label: t("personal.facts.education.label"),
        title: t("personal.facts.education.title"),
        detail: t("personal.facts.education.detail")
    }
});
