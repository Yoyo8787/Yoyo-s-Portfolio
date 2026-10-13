import { projects } from "../../../constants/projects";
import type { CardProps } from "../../../types";
import Layout from "../Layout";

const Project_ChatbotConfig = ({ setPage, layout, disabled }: CardProps) => {
    return (
        <Layout
            layout={layout}
            disabled={disabled}
            setPage={setPage}
        >
            <h2>實務經驗</h2>
            <h3>{projects.project5.cardTitle[0]}<br />{projects.project5.cardTitle[1]}</h3>
        </Layout>
    );
};

export default Project_ChatbotConfig;
