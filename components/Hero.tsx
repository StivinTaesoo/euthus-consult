"use client";
import { slideImages } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";

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
                            ? `w-full h-[400px]  bg-cover bg-center relative md:h-[600px]`
                            : `hidden`
                    }
                    style={{ backgroundImage: `url(${img.src})` }}
                    key={index}
                >
                    <div className="w-full h-full   bg-transGrey absolute top-0  flex flex-col  items-center justify-center md:items-left">
                        <div className="absolute top-40 left-4 text-center md:left-[100px] lg:left-[250px] md:text-left">
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
                            <button className="px-4 py-2 mt-8 text-white font-semibold border-current rounded bg-[orangered]">
                                Join Training Group
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
