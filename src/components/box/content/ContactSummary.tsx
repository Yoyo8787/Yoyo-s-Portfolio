import type { IconType } from "react-icons";

interface ContactSummaryProps {
    icon: IconType;
    label: string;
    labelClassName?: string;
}

const ContactSummary = ({ icon: Icon, label, labelClassName = "text-[1rem]" }: ContactSummaryProps) => (
    <div className="h-full flex justify-center items-center gap-2">
        <Icon className="w-[15%] text-[2rem]" />
        <div className={labelClassName}>{label}</div>
    </div>
);

export default ContactSummary;
