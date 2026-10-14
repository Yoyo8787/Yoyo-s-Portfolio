import { schools } from "../../../constants/experience";
import type { CardProps } from "../../../types";
import Layout, { SummaryList } from "../Layout";
const School = (props: CardProps) => {
    return (
        <Layout
            {...props}
        >
            <h2>學歷</h2>
            <SummaryList>
                {schools.slice().reverse().map((entry) => <li key={`${entry.organization}-${entry.period}`}>{entry.summary}</li>)}
            </SummaryList>
        </Layout>
    );
};

export default School;
