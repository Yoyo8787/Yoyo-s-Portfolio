import { useTranslation } from "react-i18next";

const Language = () => {
    const { t } = useTranslation();
    return (
        <>
            <h2>{t("language.title")}</h2>
            <p className="mt-2 font-display text-4xl tablet:text-[clamp(1.25rem,7vw,2.25rem)] leading-tight whitespace-nowrap">TOEIC 890</p>
            <p className="mt-1 text-sm">{t("language.certificate")}</p>
        </>
    );
};

export default Language;
