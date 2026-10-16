import { useTranslation } from "react-i18next";

const Personal = () => {
    const { t } = useTranslation();
    return (
        <div className="grid place-items-center h-full">
            <div>
                <h1 className="text-4xl">{t("personal.name")}</h1>
                <div className="ml-4">
                    {t("personal.role")}
                </div>
            </div>
        </div>
    );
};

export default Personal;
