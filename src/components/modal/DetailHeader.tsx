interface DetailHeaderProps {
    id: string;
    title: string;
}

const DetailHeader = ({ id, title }: DetailHeaderProps) => (
    <h2 id={id} className="m-0 pl-10 pr-20 pt-7 text-[2rem] font-bold leading-tight mobile:pl-5 mobile:pt-5">{title}</h2>
);

export default DetailHeader;
