import { skillIcons } from "../../../constants/skills";
import { useTranslation } from "react-i18next";

const Skill = ({ titleId }: { titleId: string }) => {
    const { t } = useTranslation();
    return (
        <>
            <h2 id={titleId}>{t("skills")}</h2>
            <div aria-hidden="true" className="flex flex-wrap justify-center gap-2 mt-4 h-[calc(100%-2rem)] w-full">
                {Object.entries(skillIcons).map(([label, Icon], index) => (
                    <span key={label}
                        className={`grid place-items-center w-[15%] h-8 text-[2rem] animate-float motion-reduce:animate-none tablet:w-[calc((100%-1.5rem)/4)] tablet:h-6 tablet:text-2xl ${index >= 7 ? "tablet:hidden" : ""}`}
                        style={{ animationDelay: `${index * 0.1}s` }}>
                        <Icon />
                    </span>
                ))}
                <span className="hidden tablet:grid tablet:place-items-center tablet:w-[calc((100%-1.5rem)/4)] tablet:h-6 text-lg leading-none font-display animate-float motion-reduce:animate-none"
                    style={{ animationDelay: "0.7s" }}>+{Object.keys(skillIcons).length - 7}</span>
            </div>
        </>
    );
};

export default Skill;
