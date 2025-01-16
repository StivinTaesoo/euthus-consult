"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
    const [stickNav, setStickyNav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    return (
        <div className="w-full absolute top-0 z-20 ">
            {/* ******* SOCIALS BAR ************** */}
            <div className="hidden w-full  justify-between items-center px-12 text-white bg-transparent md:flex">
                <div className="flex items-center gap-x-4   py-4">
                    <FaFacebookF /> <FaInstagram /> <RiTwitterXFill />
                </div>
                <div className="flex items-center text-[12px]  gap-x-2">
                    <MdHelpOutline />
                    <p className="">
                        Have a question or need more information?
                    </p>
                    <FaWhatsapp />
                    <p>+234 7039283570</p>
                </div>
            </div>

            {/* ******* MAIN NAVBAR ************** */}
            <div
                className={
                    stickNav
                        ? "hidden sticky-nav active fixed top-0 nav-container w-full  items-center justify-between bg-grey backdrop-blur-sm px-12  py-2 bg-opacity-5  md:flex"
                        : "hidden sticky-nav nav-container w-full  items-center justify-between bg-grey backdrop-blur-sm px-12  py-2 bg-opacity-5  md:flex"
                }
            >
                {/* Logo */}
                <div className="flex gap-2 items-center">
                    <img
                        src="./images/Euthus-logo.jpeg"
                        alt="logo"
                        className="w-[60px] h-[60px] rounded"
                    />
                    <div className="text-white">
                        <h1 className="font-bold text-lg">EUTHUS</h1>
                        <h2 className="font-bold text-md">CONSULT</h2>
                    </div>
                </div>
                <ul className="flex items-center justify-center gap-x-10 opacity-none text-[18px] text-white  ">
                    <li>
                        <Link href="/" className="hover:text-[#9D9BA7]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-[#9D9BA7]">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="hover:text-[#9D9BA7]">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-[#9D9BA7]">
                            Courses
                        </Link>
                    </li>

                    <Link
                        href="/contact"
                        className="btn-effect px-4 py-1 text-white text-[18px] border-2 text-center  rounded-lg shadow-lg shadow-slate-700/70 hover:bg-blue-300 hover:transition-all "
                    >
                        Get in touch
                    </Link>
                </ul>
            </div>
            {/* Mobile Navbar */}
            <MobileNavbar />
        </div>
    );
};
