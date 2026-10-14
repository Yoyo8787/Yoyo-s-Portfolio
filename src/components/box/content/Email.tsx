import { contacts } from "../../../constants/contacts";
import type { CardProps } from "../../../types";
import Layout, { CenteredContent } from "../Layout";
import { MdEmail } from "react-icons/md";

const Email = (props: CardProps) => {
    return (
        <Layout
            {...props}
        >
            <CenteredContent>
                <MdEmail className="w-[15%] text-[2rem]" />
                <div className="text-[1rem]">{contacts.email}</div>
            </CenteredContent>
        </Layout>
    );
};

export default Email;
