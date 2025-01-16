"use client";
import { slideImages } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
    const [activeImage, setActiveImage] = useState(0);

    const next = () => {
        if (activeImage === slideImages.length - 1) {
            setActiveImage(0);
        } else {
            setActiveImage(activeImage + 1);
        }
    };
    // const prev = () => {
    //     activeImage === 0
    //         ? setActiveImage(slideImages.length - 1)
    //         : setActiveImage(activeImage - 1);
    // };

    useEffect(() => {
        const timer = setTimeout(() => {
            next();
        }, 10000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeImage]);
    return (
        <div className="">
            <Navbar />
            {slideImages.map((img, index) => (
                <div
                    className={
                        index === activeImage
                            ? `w-full h-[500px]  bg-cover bg-center relative md:h-[600px]`
                            : `hidden`
                    }
                    style={{ backgroundImage: `url(${img.src})` }}
                    key={index}
                >
                    <div className="w-full h-full bg-transGrey absolute top-0 flex flex-col  items-center justify-center ">
                        <div className="absolute top-40 flex flex-col items-center justify-center text-center ">
                            <motion.div
                                initial={{
                                    opacity: index === activeImage ? 0 : 0.5,
                                    scale: index === activeImage ? 0.5 : 0.3,
                                }}
                                animate={{
                                    opacity: index === activeImage ? 1 : 0.5,
                                    scale: index === activeImage ? 1 : 0.3,
                                }}
                                transition={{
                                    ease: "linear",
                                    duration: 1,
                                    x: { duration: 1 },
                                }}
                                className="w-full"
                            >
                                {" "}
                                <h1 className="text-[28px] font-bold text-white text-shadow-2 md:text-[60px]">
                                    {img.heading}
                                </h1>
                                <p className="text-white max-w-[300px] text-[12px] md:text-[18px] md:max-w-[500px]">
                                    {img.desc}
                                </p>
                            </motion.div>
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
            ))}
        </div>
    );
}
