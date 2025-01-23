import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";

function FooterSocials() {
    return (
        <div>
            <h2 className="font-bold">Social links</h2>
            <div className="w-full flex  flex-col items-left  text-white bg-transparent ">
                <div className="flex items-left gap-x-4 py-4">
                    <FaFacebookF /> <FaInstagram /> <RiTwitterXFill />{" "}
                    <FaLinkedinIn />
                </div>
                <div className="flex flex-col items-left text-[12px] gap-x-2 gap-y-3">
                    <div className="flex gap-x-1 items-center">
                        <MdHelpOutline />
                        <p>Have a question or need more information?</p>
                    </div>
                    <div className="flex gap-x-1 items-center">
                        <FaWhatsapp />
                        <p>+234 7039283570</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterSocials;
