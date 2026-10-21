import { useTranslation } from "react-i18next";

const Personal = ({ titleId }: { titleId: string }) => {
    const { t } = useTranslation();
    return (
        <div className="grid place-items-center h-full text-center">
            <div>
                <h1 id={titleId} className="text-4xl">{t("personal.name")}</h1>
                <p>{t("personal.role")}</p>
            </div>
        </div>
    );
};

export default Personal;
