import { skillIcons } from "../../../constants/skills";

const Skill = () => {

    return (
        <>
            <h2>技能</h2>
            <div className="flex flex-wrap justify-center gap-2 mt-4 h-[calc(100%-2rem)] w-full">
                {skillIcons.map((Icon, index) => (
                    <Icon
                        key={index}
                        className="w-[15%] text-[2rem] animate-float motion-reduce:animate-none"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    />
                ))}
            </div>
        </>
    );
};

export default Skill;
