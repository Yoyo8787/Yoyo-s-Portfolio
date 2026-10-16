import { useTranslation } from "react-i18next";

const Language = () => {
    const { t } = useTranslation();
    return (
        <>
            <h2>{t("language.title")}</h2>
            <div className="mt-2">{t("language.certificate")}</div>
        </>
    );
};

export default Language;
