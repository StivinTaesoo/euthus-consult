import Contacts from "@/components/contacts/Contacts";
import Link from "next/link";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function Contact() {
    return (
        <div className="w-full">
            <div
                className={`w-full h-[400px]  bg-cover bg-center relative md:h-[600px]`}
                style={{ backgroundImage: `url(./images/image-11.jpeg)` }}
            >
                <div className="w-full h-full bg-transGrey absolute top-0 flex flex-col  items-center justify-center ">
                    <div className="absolute opacity-5 top-[120px] z-[1] text-white font-bold text-[50px] md:text-[100px] text-center uppercase ">
                        Get In Touch
                    </div>
                    <div className="absolute top-40 z-20 flex flex-col items-center justify-center text-center ">
                        {" "}
                        <h1 className="text-[28px] font-bold text-white text-shadow-2 md:text-[60px]">
                            Get In Touch
                        </h1>
                        <p className="text-white max-w-[300px] text-[12px] md:text-[18px] md:max-w-[500px]">
                            You can reach out to us for more information and
                            enquiries
                        </p>
                        <div className="flex flex-col gap-x-4 md:flex-row">
                            <Link href="https://chat.whatsapp.com/Es5TWvCebsYEbpXzPz50iD">
                                <button className="button-eff px-4 min-w-[200px] py-2 mt-8 text-white font-semibold rounded bg-[orangered] hover:border-[1px] hover:text-[whitesmoke] hover:bg-[#ff7300]">
                                    Join Training Group
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto my-20 text-center">
                <h1 className="text-2xl  font-bold md:text-[40px] ">
                    GET IN TOUCH <span className="text-[#091268]">WITH US</span>
                </h1>
                <p className="text-orange-300 text-xl font-bold mt-4">
                    Contact us today!
                </p>
                <p className="text-[16px] my-4 md:text-[18px] ">
                    We&apos;d love to hear from you! Whether you have a
                    question, need help, or just want to say hello, we&apos;re
                    here to listen. If you&apos;re looking for a seasoned CAC
                    training facilitator to provide expert guidance and
                    training, consider Coach AB to discuss your training needs
                    and schedule a lesson.
                </p>

                <div className="flex flex-col items-center justify-center my-10 gap-6 md:flex-row">
                    <div className="w-16 h-16 text-3xl flex justify-center items-center bg-orange-300 md:text-3xl rounded">
                        <MdOutlinePhoneInTalk />
                    </div>

                    <p className="text-2xl md:text-5xl ">+234 7039283570</p>
                </div>
            </div>

            <Contacts />
        </div>
    );
}
