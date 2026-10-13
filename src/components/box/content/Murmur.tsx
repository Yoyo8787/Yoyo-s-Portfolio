import type { CardProps } from "../../../types";
import Layout, { CenteredContent } from "../Layout";
import { IoChatboxEllipses } from "react-icons/io5";

const Murmur = ({ setPage, layout, disabled }: CardProps) => {
    return (
        <Layout
            boxstyle={{ aspectRatio: "1 / 1" }}
            layout={layout}
            disabled={disabled}
            setPage={setPage}
        >
            <CenteredContent>
                <IoChatboxEllipses className="w-[15%] text-[2rem]" />
                <div>好想泡溫泉~</div>
            </CenteredContent>
        </Layout>
    );
};

export default Murmur;
