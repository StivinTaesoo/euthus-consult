type Props = {
    icon: React.ReactNode;
    title: string;
    desc: string;
};
function ServicesItems({ icon, title, desc }: Props) {
    return (
        <div
            className={`items-hover w-[300px] h-[300px] shadow-xl p-4  flex flex-col items-center justify-center text-center gap-4`}
        >
            <div className="text-[30px] text-[#5e5d5d]">{icon}</div>
            <h1 className="text-[16px] uppercase mt-4 font-bold text-black  md:text-[18px] leading-none ">
                {title}
            </h1>
            <p className="text-[#5e5d5d] max-w-[300px] text-[12px] md:text-[18px] md:max-w-[500px]">
                {desc}
            </p>
        </div>
    );
}

export default ServicesItems;
