import { skillIcons } from "../../../constants/skills";
import { useTranslation } from "react-i18next";

const Skill = () => {
    const { t } = useTranslation();
    return (
        <>
            <h2>{t("skills")}</h2>
            <div className="flex flex-wrap justify-center gap-2 mt-4 h-[calc(100%-2rem)] w-full">
                {Object.entries(skillIcons).map(([label, Icon], index) => (
                    <Icon
                        key={label}
                        role="img"
                        aria-label={label}
                        className="w-[15%] text-[2rem] animate-float motion-reduce:animate-none"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    />
                ))}
            </div>
        </>
    );
};

export default Skill;
