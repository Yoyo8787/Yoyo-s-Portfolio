import { projects } from "../../constants/projects";
import Personal from "./content/Personal";
import School from "./content/School";
import Skill from "./content/Skill";
import Job from "./content/Job";
import Project from "./content/Project";

const Content = ({ contentId }: { contentId: string }) => {
    switch (contentId) {
        case "personal": return <Personal />;
        case "school": return <School />;
        case "skill": return <Skill />;
        case "job": return <Job />;
        default: return <Project project={projects[contentId]} />;
    }
};

export default Content;
