import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
    const { t, i18n } = useTranslation();
    const target = i18n.resolvedLanguage === "en" ? "zh-TW" : "en";

    return (
        <button type="button"
            aria-label={t("languageSwitch", { language: t(`languages.${target}`) })}
            className="grid size-11 place-items-center rounded-xl border-2 border-solid border-primary bg-surface text-foreground text-sm font-bold shadow-card cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => void i18n.changeLanguage(target)}>
            {target === "en" ? "EN" : "中"}
        </button>
    );
};

export default LanguageToggle;
