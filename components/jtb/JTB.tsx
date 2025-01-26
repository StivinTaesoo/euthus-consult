import Link from "next/link";

type Props = {
    title: string;
    desc: string;
    image: string;
    link: string;
    bgColor: string;
};

function JTB({ title, desc, image, link, bgColor }: Props) {
    return (
        <div className="items-hover w-full rounded-xl h-[500px] md:w-[400px]">
            <div className="w-full h-[250px] bg-red-300 rounded-t-xl ">
                <img
                    src={image}
                    alt=""
                    className="rounded-t-xl w-full h-full object-cover"
                />
            </div>
            <div className="w-full h-[250px] flex flex-col gap-y-4 p-4 bg-[#f3f2f2] rounded-b-xl  ">
                <h2 className="uppercase fond-bold text-2xl">{title}</h2>
                <p className="h-[80px]">{desc}</p>
                <Link href={link}>
                    <button
                        className="button-eff w-full py-2 text-white font-semibold rounded hover:border-[1px] hover:text-[whitesmoke] hover:bg-[#ff7300]"
                        style={{ background: `${bgColor}` }}
                    >
                        Join Community
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default JTB;
