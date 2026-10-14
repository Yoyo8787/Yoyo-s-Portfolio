import type { CardProps } from "../../../types";
import Layout, { CenteredContent } from "../Layout";
import { FaGithub } from "react-icons/fa";

const Github = (props: CardProps) => {
    return (
        <Layout
            boxstyle={{ background: "var(--inkcolor)", color: "var(--oninkcolor)" }}
            {...props}
        >
            <CenteredContent>
                <FaGithub className="w-[15%] text-[2rem]" />
                <div className="text-[1.25rem] font-display tracking-wide">github.com/Yoyo8787</div>
            </CenteredContent>
        </Layout>
    );
};

export default Github;
