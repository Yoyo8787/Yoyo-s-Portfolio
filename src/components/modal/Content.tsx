import Personal from "./content/Personal";
import Skill from "./content/Skill";
import Timeline from "./content/Timeline";
import Project from "./content/Project";

interface ContentProps {
    contentId: string;
    onNavigate: (contentId: string) => void;
}

const Content = ({ contentId, onNavigate }: ContentProps) => {
    switch (contentId) {
        case "personal": return <Personal />;
        case "school": return <Timeline initialTab="school" />;
        case "skill": return <Skill />;
        case "job": return <Timeline initialTab="job" />;
        default: return <Project projectId={contentId} onNavigate={onNavigate} />;
    }
};

export default Content;
