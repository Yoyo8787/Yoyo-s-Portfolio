import { jobs } from "../../../constants/experience";
import type { CardProps } from "../../../types";
import Layout, { SummaryList } from "../Layout";
const Job = (props: CardProps) => {
    return (
        <Layout
            {...props}
        >
            <h2>工作經驗</h2>
            <SummaryList>
                {jobs.slice().reverse().map((entry) => <li key={entry.organization}>{entry.summary}</li>)}
            </SummaryList>
        </Layout>
    );
};

export default Job;
