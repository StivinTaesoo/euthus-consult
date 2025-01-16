"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import { RiMenu4Fill, RiCloseFill, RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";

export const MobileNavbar = () => {
    const [click, setClick] = useState<boolean>(false);
    const ref = useRef<any>(null);

    const [stickNav, setStickyNav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleClickedOutside = (ev: any) => {
            if (!ref.current.contains(ev.target)) {
                setClick(false);
            }
        };
        document.addEventListener("click", handleClickedOutside);

        return () => {
            document.removeEventListener("click", handleClickedOutside);
        };
    }, [click]);

    return (
        <div className="w-full fixed top-0 z-20">
            {/* ************* MOBILE NAVBAR ************* */}
            <div
                className={
                    stickNav
                        ? "mobile-menu w-full sticky-nav  active flex items-center justify-between   px-4 py-2 bg-opacity-10 fixed top-0 z-20 md:hidden"
                        : "mobile-menu w-full flex items-center justify-between bg-grey  px-4 py-2 bg-opacity-10 fixed top-2 z-20 md:hidden"
                }
            >
                {/* Logo */}
                <div className="flex gap-2 items-center">
                    <img
                        src="/images/Euthus-logo.jpeg"
                        alt="logo"
                        className="w-[50px] h-[50px] border-2 rounded"
                    />
                    <div className="text-white flex flex-col">
                        <span className=" text-[16px] ">EUTHUS</span>
                        <span className=" text-[14px] ">CONSULT</span>
                    </div>
                </div>
                <div className="relative">
                    {/* Hamburger Menu */}
                    <RiMenu4Fill
                        onClick={handleClick}
                        className="text-[30px] text-[#1F75FE] border-[1px] rounded font-bold"
                    />
                </div>
                {/* Dropdown Menu  */}
                <ul
                    ref={ref}
                    className={
                        click
                            ? "dropdown-menu w-[80vw] h-[98vh] absolute top-0 right-0 flex flex-col  items-left px-4 pt-20 pb-4  gap-y-4 bg-[#020c66] text-[18px] text-white  "
                            : "hidden"
                    }
                >
                    <RiCloseFill
                        className="absolute top-8 right-6 text-xl border-2 "
                        onClick={closeMobileMenu}
                    />
                    <Link
                        href="/"
                        className="relative"
                        onClick={closeMobileMenu}
                    >
                        <li>Home</li>
                    </Link>
                    <Link
                        href="/about"
                        className="relative"
                        onClick={closeMobileMenu}
                    >
                        <li>About</li>
                    </Link>
                    <Link
                        href="/services"
                        className="relative"
                        onClick={closeMobileMenu}
                    >
                        <li>Services</li>
                    </Link>
                    <Link
                        href="/courses"
                        className="relative"
                        onClick={closeMobileMenu}
                    >
                        <li>Courses</li>
                    </Link>

                    <Link
                        href="/contact"
                        className="px-4 py-2 mt-2 text-white text-center text-[24px] bg-bluePrimary  rounded-lg shadow-lg shadow-slate-700/70 hover:bg-blue-300 hover:transition-all"
                        onClick={closeMobileMenu}
                    >
                        Get in touch
                    </Link>

                    <div className="flex items-center gap-x-4 mt-20  py-4">
                        <FaFacebookF /> <FaInstagram /> <RiTwitterXFill />
                    </div>
                    <div className="flex flex-col text-[12px]  gap-y-4">
                        <div className="flex items-center">
                            <MdHelpOutline />
                            <p className="">
                                Have a question or need more information?
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FaWhatsapp />
                            <p>+234 7039283570</p>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};
