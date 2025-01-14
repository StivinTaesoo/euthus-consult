"use client";
import { slideImages } from "@/utils/constants";
import React, { useEffect, useState } from "react";

export default function NewHeroSection() {
    const [activeImage, setActiveImage] = useState(0);

    const next = () => {
        activeImage === slideImages.length - 1
            ? setActiveImage(0)
            : setActiveImage(activeImage + 1);
    };
    const prev = () => {
        activeImage === 0
            ? setActiveImage(slideImages.length - 1)
            : setActiveImage(activeImage - 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            next();
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeImage]);
    return (
        <div>
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
                    <div className="w-full h-full   bg-transGrey absolute top-0  flex flex-col  items-left justify-center">
                        <div className="absolute top-40 left-[250px] text-left">
                            <h1 className="text-[28px] font-bold text-white text-shadow-2 md:text-[60px]">
                                {img.desc}
                            </h1>
                            <p className="text-white text-[12px] md:text-[20px]">
                                I'm your number one CAC expert. <br /> Please
                                save my contact as{" "}
                                <span className="font-bold text-orange-400">
                                    Coach AB
                                </span>
                            </p>
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
