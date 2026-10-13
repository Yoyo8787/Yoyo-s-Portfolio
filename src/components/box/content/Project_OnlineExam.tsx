import { projects } from "../../../constants/projects";
import type { CardProps } from "../../../types";
import Layout from "../Layout";

const Project_OnlineExam = ({ setPage, layout, disabled }: CardProps) => {
    return (
        <Layout
            layout={layout}
            disabled={disabled}
            setPage={setPage}
        >
            <h2>實務經驗</h2>
            <h3>{projects.project2.cardTitle[0]}</h3>
            <img src={projects.project2.cover} alt="" className="transform-[rotate(-20deg)] w-120 relative -top-4 left-4 rounded-sm" />
        </Layout>
    );
};

export default Project_OnlineExam;
