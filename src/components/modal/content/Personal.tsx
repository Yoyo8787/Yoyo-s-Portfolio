import img from "../../../assets/personal/portrait.webp";
import { useTranslation } from "react-i18next";
import { getPersonalFacts } from "../../../constants/personal";

const Personal = () => {
    const { t } = useTranslation();
    const personalFacts = getPersonalFacts(t);
    return (
        <div className="w-full grid grid-cols-[22.5rem_minmax(0,1fr)] mobile:grid-cols-1">
            <div className="relative flex items-center justify-center p-10 bg-background overflow-hidden mobile:p-8">
                <div aria-hidden="true" className="seigaiha [--wave-a:#46293a] [--wave-b:#6b3f55] absolute inset-x-0 bottom-0 h-2/5" />
                <div className="relative rotate-[-1.5deg]">
                    <div aria-hidden="true" className="absolute left-2.5 top-2.5 size-full rounded-xl bg-primary" />
                    <img className="relative block w-65 aspect-13/17 object-cover rounded-xl border-2 border-solid border-ink mobile:w-48"
                        src={img} alt={t("personal.portraitAlt")} />
                </div>
            </div>

            <div className="flex flex-col gap-4 px-12 pt-12 pb-10 mobile:px-5 mobile:pt-6 mobile:pb-8">
                <h2 id="personal-title" className="m-0 text-[3.25rem] font-bold leading-[1.1] mobile:text-[2.5rem]">{t("personal.name")}</h2>
                <p className="m-0 text-base leading-[1.75] text-muted max-w-100">
                    {t("personal.introduction")}
                </p>
                <dl className="m-0 mt-2 grid grid-cols-2 gap-3">
                    {Object.entries(personalFacts).map(([id, fact]) => (
                        <div key={id} className="flex flex-col gap-0.5 pt-3 border-0 border-t-2 border-solid border-primary">
                            <dt className="text-[0.8125rem] font-medium text-primary-ink">{fact.label}</dt>
                            <dd className="m-0 flex flex-col">
                                <span className="text-base font-bold">{fact.title}</span>
                                <span className="text-[0.8125rem] text-muted">{fact.detail}</span>
                            </dd>
                        </div>
                    ))}
                </dl>
                <div className="grow" />
                <p className="relative m-0 mt-6 self-start px-4.5 py-3.5 bg-[#f9bf45] text-[#1c1c1c] font-kai text-[1.125rem] leading-relaxed -rotate-2">
                    <span className="absolute -top-5 -left-10 rotate-[-8deg] font-display text-[0.8125rem] leading-none tracking-wider text-primary-ink whitespace-nowrap">
                        {t("personal.workingOnLabel")}</span>
                    {t("personal.workingOn")}
                </p>
            </div>
        </div>
    );
};

export default Personal;
