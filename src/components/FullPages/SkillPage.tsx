import { skillGroups } from "../../data/skills";

const SkillPage = () => (
    <div>
        <h2>技能</h2>
        <div className="w-[20rem] max-w-[80vw] mt-4 grid grid-cols-1 gap-8">
            {skillGroups.map((group) => (
                <div key={group.title} className="w-[18rem]">
                    <div className="text-[1.25rem] font-bold">{group.title}</div>
                    <ul className="pl-4 pt-1">
                        {group.items.map((item) => <li key={item} className="pt-[0.1rem]">{item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export default SkillPage;
