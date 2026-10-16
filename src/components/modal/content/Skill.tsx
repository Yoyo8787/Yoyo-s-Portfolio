import { useTranslation } from "react-i18next";
import DetailHeader from "../DetailHeader";
import { getSkillGroups } from "../../../constants/skills";

const pad = (value: number) => String(value).padStart(2, "0");

const Skill = () => {
    const { t } = useTranslation();
    const skillGroups = getSkillGroups(t);
    return (
        <div className="w-full">
            <DetailHeader id="skills-title" title={t("skills")} />
            {/* 不用分隔線：編號自成一欄當錨點，靠留白分組。 */}
            <div className="grid grid-cols-4 gap-x-8 gap-y-10 px-10 pt-8 pb-10 tablet:grid-cols-2 mobile:px-5 mobile:gap-x-5 mobile:gap-y-8">
                {Object.entries(skillGroups).map(([id, group], index) => (
                    <section key={id} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-1 gap-y-2 content-start mobile:grid-cols-[1.75rem_minmax(0,1fr)]">
                        <span className="font-display text-[1.375rem] leading-none text-primary-ink mobile:text-[1.125rem]">{pad(index + 1)}</span>
                        <h3 className="m-0 text-base font-bold leading-none self-end">{group.title}</h3>
                        <ul className="col-start-2 list-none m-0 p-0 text-[0.875rem] leading-[1.9] text-muted">
                            {Object.entries(group.items).map(([itemId, text]) => <li key={itemId}>{text}</li>)}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Skill;
