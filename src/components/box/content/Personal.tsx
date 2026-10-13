import type { CardProps } from "../../../types";
import Layout from "../Layout";

const Personal = ({ setPage, layout, disabled }: CardProps) => {
    return (
        <Layout
            layout={layout}
            disabled={disabled}
            setPage={setPage}
        >
            <div className=" grid place-items-center h-full">
                <div>
                <h2 className="text-4xl">徐天祐</h2>
                <div className="ml-4">
                    前端工程師
                </div>
                </div>
            </div>
        </Layout>
    );
};

export default Personal;
