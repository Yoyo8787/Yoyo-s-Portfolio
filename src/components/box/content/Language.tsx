import type { CardProps } from "../../../types";
import Layout from "../Layout";

const Language = (props: CardProps) => {
    return (
        <Layout
            {...props}
        >
            <h2>語言</h2>
            <div className="mt-2">多益890分金色證書</div>
        </Layout>
    );
};

export default Language;
