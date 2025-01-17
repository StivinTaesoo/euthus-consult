type Props = {
    title: string;
    descText: string;
    imgSrc: string;
};
export default function HeroForPages({ title, descText, imgSrc }: Props) {
    return (
        <div className="">
            <div
                className={`w-full h-[500px]  bg-cover bg-center relative md:h-[600px]`}
                style={{ backgroundImage: `url(${imgSrc})` }}
            >
                <div className="w-full h-full bg-transGrey absolute top-0 flex flex-col  items-center justify-center ">
                    <div className="absolute opacity-5 top-[120px] z-[1] text-white font-bold text-[50px] md:text-[100px] text-center uppercase ">
                        {title}
                    </div>
                    <div className="absolute top-40 z-20 flex flex-col items-center justify-center text-center ">
                        {" "}
                        <h1 className="text-[28px] font-bold text-white text-shadow-2 md:text-[60px]">
                            {title}
                        </h1>
                        <p className="text-white max-w-[300px] text-[12px] md:text-[18px] md:max-w-[500px]">
                            {descText}
                        </p>
                        <div className="flex flex-col gap-x-4 md:flex-row">
                            <button className="button-eff px-4 min-w-[200px] py-2 mt-8 text-white font-semibold rounded bg-[orangered] hover:border-[1px] hover:text-[whitesmoke] hover:bg-[#ff7300]">
                                Join Training Group
                            </button>
                            <button className="button-eff px-4 min-w-[200px] py-2 mt-8 text-white font-semibold  border-[1px] rounded hover:bg-white hover:text-[#01073b]">
                                Get in touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
