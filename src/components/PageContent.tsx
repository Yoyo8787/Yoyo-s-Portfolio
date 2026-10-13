import { projects } from "../data/projects";
import PersonalPage from "./FullPages/PersonalPage";
import SchoolPage from "./FullPages/SchoolPage";
import SkillPage from "./FullPages/SkillPage";
import JobPage from "./FullPages/JobPage";
import ProjectPage from "./FullPages/ProjectPage";

const PageContent = ({ contentId }: { contentId: string }) => {
    switch (contentId) {
        case "personal": return <PersonalPage />;
        case "school": return <SchoolPage />;
        case "skill": return <SkillPage />;
        case "job": return <JobPage />;
        default: return <ProjectPage project={projects[contentId]} />;
    }
};

export default PageContent;
