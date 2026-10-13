import type { CardProps } from "../../../types";
import Layout, { CenteredContent } from "../Layout";
import { FaGithub } from "react-icons/fa";

const Github = ({ setPage, layout, disabled }: CardProps) => {
    return (
        <Layout
            layout={layout}
            disabled={disabled}
            setPage={setPage}
        >
            <CenteredContent>
                <FaGithub className="w-[15%] text-[2rem]" />
                <div className="text-[1rem]">github.com/Yoyo8787</div>
            </CenteredContent>
        </Layout>
    );
};

export default Github;
