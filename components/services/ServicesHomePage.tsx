import ServicesItems from "./ServicesItems";
import { MdBusiness, MdModelTraining } from "react-icons/md";
import Link from "next/link";
import { FaChevronRight, FaRegNewspaper } from "react-icons/fa";
import { TbReceiptTax } from "react-icons/tb";

function ServicesHomePage() {
    return (
        <div className="w-full">
            <div className="w-[90%] mx-auto grid grid-cols-1 gap-x-2 gap-y-10 justify-items-center mt-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:w-[80%] ">
                <Link href={"./contact"}>
                    <div
                        className={`items-hover w-[300px] h-[300px]  bg-cover bg-center relative md:h-[300px]`}
                        style={{
                            backgroundImage: `url(./images/image-6.jpeg)`,
                        }}
                    >
                        <div className="w-full h-full bg-transGrey absolute top-0 flex flex-col  items-center justify-center ">
                            <div className="p-4  flex flex-col items-center justify-center text-center ">
                                {" "}
                                <p className="text-white max-w-[300px] uppercase text-[12px] md:text-[18px] md:max-w-[500px]">
                                    Our Services
                                </p>
                                <h1 className="text-[40px] uppercase mt-4 font-bold text-white text-shadow-2 md:text-[60px] leading-none ">
                                    What We Can Do
                                </h1>
                            </div>
                        </div>
                    </div>
                </Link>

                {/*  */}

                <Link href="./contact">
                    <ServicesItems
                        icon={<MdBusiness />}
                        title="Business Name Registration"
                        desc="Secure your business identity with our swift registration services."
                    />
                </Link>
                <Link href="./contact">
                    <ServicesItems
                        icon={<FaRegNewspaper />}
                        title="Newspaper Publication"
                        desc="Publish your company's information in compliance with regulatory requirements."
                    />
                </Link>

                <Link href="https://chat.whatsapp.com/Es5TWvCebsYEbpXzPz50iD">
                    <ServicesItems
                        icon={<MdModelTraining />}
                        title="CAC Training and Mentorship"
                        desc="Enhance your knowledge and skills on company registration and compliance with our training and mentorship programs."
                    />
                </Link>

                <Link href="https://chat.whatsapp.com/C8Dx5lY8bhvGupk9RzMg6O">
                    <ServicesItems
                        icon={<TbReceiptTax />}
                        title="Get JTB TIN FOR 1K"
                        desc="Obtain your Joint Tax Board (JTB) Tax Identification Number (TIN) with our efficient registration services."
                    />
                </Link>
                <Link href="./services">
                    <ServicesItems
                        icon={<FaChevronRight />}
                        title="View More"
                        desc="Click here to view more services"
                    />
                </Link>
            </div>
        </div>
    );
}

export default ServicesHomePage;
