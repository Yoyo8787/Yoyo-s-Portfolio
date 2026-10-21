import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
    const { t, i18n } = useTranslation();
    return (
        <div role="group" aria-label={t("language.title")}
            className="flex h-11 items-center rounded-full border-2 border-solid border-primary bg-surface p-1 shadow-card">
            {(["zh-TW", "en"] as const).map((language) => (
                <button key={language} type="button" lang={language}
                    aria-label={t(`languages.${language}`)}
                    aria-pressed={i18n.resolvedLanguage === language}
                    className={`h-full rounded-full border-0 px-3 text-sm font-bold cursor-pointer ${i18n.resolvedLanguage === language ? "bg-primary text-on-primary" : "bg-transparent text-foreground"}`}
                    onClick={() => void i18n.changeLanguage(language)}>
                    {language === "en" ? "EN" : "中"}
                </button>
            ))}
        </div>
    );
};

export default LanguageToggle;
