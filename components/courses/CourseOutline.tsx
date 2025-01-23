import { FaBusinessTime } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";
import {
    MdAllInbox,
    MdFreeCancellation,
    MdGroup,
    MdOutlineDelete,
    MdOutlineMenuBook,
    MdPayment,
    MdSupportAgent,
} from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { RiOrganizationChart } from "react-icons/ri";
import { SiCoinmarketcap } from "react-icons/si";

function CourseOutline() {
    return (
        <div className="w-full   py-16 bg-[#ededee]">
            <div className="w-[90%] mx-auto md:w-[80%]">
                <h1 className="text-3xl font-bold text-[#010191] mb-6">
                    Course Outline
                </h1>
                <div className="grid grid-cols-1 gap-x-20 gap-y-6  justify-items-start  xl:grid-cols-2 text-[16px] md:text-[18px]">
                    <div className="flex items-center gap-4 ">
                        <FaBusinessTime className="text-[#b3afaf]" />
                        <p className=" ">Business Name Registration</p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <RiOrganizationChart className="text-[#b3afaf]" />
                        <p>Limited Company Registration</p>
                    </div>
                    <div className="flex items-center  gap-4 ">
                        <VscOrganization className="text-[#b3afaf]" />
                        <p>
                            NGOs, Church, Mosques, Associations, Clubs, Groups
                        </p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <MdAllInbox className="text-[#b3afaf]" />
                        <p className=" ">
                            All In 1 – CAC Post Incorporation Course{" "}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <MdGroup className="text-[#b3afaf]" />
                        <p>
                            Group Of Company/Limited By Guarantee Registration{" "}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <GrUpgrade className="text-[#b3afaf]" />
                        <p>Upgrade Of Business Name To Company </p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <MdOutlineDelete className="text-[#b3afaf]" />
                        <p>
                            Step By Step on How to Delete A Business Name From
                            CAC Portal{" "}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <MdOutlineMenuBook className="text-[#b3afaf]" />
                        <p>Ebook Publishing Course</p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <MdSupportAgent className="text-[#b3afaf]" />
                        <p>
                            Access to an ACCREDITED agent portal for use! (T & C
                            APPLY)
                        </p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <SiCoinmarketcap className="text-[#b3afaf]" />
                        <p>
                            Practical Ways To Market Your Business Both Online &
                            Offline
                        </p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <MdPayment className="text-[#b3afaf]" />
                        <p>How To Pay The N150 CAC Penalty Fee</p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <MdFreeCancellation className="text-[#b3afaf]" />
                        <p>Pre-Registration Share Correction </p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <MdFreeCancellation className="text-[#b3afaf]" />
                        <p>Lifetime access to the CAC mentorship group </p>
                    </div>
                </div>
                <div className="text-lg  mt-4 p-4 border-[1px] rounded bg-white text-center text-[16px] md:text-[18px]">
                    <p className="uppercase font-bold mb-4">
                        Course registration fee:
                    </p>
                    <div className="flex flex-col gap-4 justify-center items-center text-center md:flex-row md:gap-10">
                        <div className="text-center">
                            Regular fee N100,000 only
                        </div>
                        <div className="text-center">
                            Limited time offer <strong>N10,000</strong> only
                        </div>
                    </div>
                    <p className="text-[14px] text-[#b3afaf] mt-2 md:text-[16px]">
                        Take advantage of the Limited Time Offer while it lasts
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CourseOutline;
