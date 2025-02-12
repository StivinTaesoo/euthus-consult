/* eslint-disable @next/next/no-img-element */

"use client";
import { useState } from "react";

function OurTeam() {
    const [isClicked, setIsClicked] = useState<boolean>(true);

    const handleIsClicked = () => {
        setIsClicked(!isClicked);
    };
    return (
        <div className="mt-20 gap-x-2 md:flex items-center">
            <div>
                <div
                    className="w-full py-10 text-white uppercase flex flex-col gap-y-6 items-center justify-center bg-no-repeat bg-cover md:w-[700px]"
                    style={{
                        backgroundImage: `linear-gradient(
            rgb(1, 7, 59, 0.9),
            rgba(0, 4, 40, 0.9)
             ),
            url(./images/image-14.jpg)`,
                    }}
                >
                    <h1 className="text-[#bab9bd]  text-lg font-bold ">
                        Meet Coach AB
                    </h1>
                    <div className="w-[250px] h-[330px] mt-10 relative bg-orange-400 md:w-[300px] md:h-[400px]">
                        <div className="items-hover w-full absolute left-[-30px] top-[-30px] ">
                            <img
                                src="./images/coach-ab.jpg"
                                alt="Coach AB"
                                className="w-full rounded-tr-3xl rounded-bl-3xl"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-bold">
                            Abraham Akor-Ikpam
                        </h2>
                        <p className="text-[#bab9bd] text-md font-semibold md:text-lg">
                            facilitator
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[95%] mx-auto text-[16px] leading-7 shadow-xl p-6 md:text-[18px] md:w-[500px]">
                <p>
                    Coach AB is a seasoned training facilitator with a
                    specialized focus on Corporate Affairs Commission (CAC)
                    training. With extensive experience in delivering
                    high-impact training sessions, Coach AB has established
                    himself as a trusted expert in CAC compliance and
                    regulations. As a certified CAC training facilitator, Coach
                    AB possesses in-depth knowledge of the Commission&apos;s
                    laws, regulations, and guidelines.
                    <button
                        onClick={handleIsClicked}
                        className={
                            isClicked
                                ? "block button-eff bg-[#091268] mt-2 py-[4px] px-4 text-[14px] text-white font-semibold rounded hover:border-[1px] hover:text-[whitesmoke] hover:bg-[#ff7300]"
                                : "hidden"
                        }
                    >
                        Read More
                    </button>
                </p>
                <p className={isClicked ? "hidden" : "block"}>
                    He has worked with numerous organizations, providing
                    training and guidance on CAC compliance, company
                    registration, and business reform initiatives. Coach
                    AB&apos;s training sessions are engaging, informative, and
                    tailored to meet the specific needs of his clients. He uses
                    real-life examples, case studies, and interactive exercises
                    to ensure participants gain practical insights and skills.
                    His approach is designed to empower participants with the
                    knowledge and confidence to navigate CAC regulations and
                    ensure compliance.
                    <button
                        onClick={handleIsClicked}
                        className={
                            isClicked
                                ? "hidden "
                                : "block button-eff bg-[#091268] mt-2 py-[4px] px-4 text-[14px] text-white font-semibold rounded hover:border-[1px] hover:text-[whitesmoke] hover:bg-[#ff7300]"
                        }
                    >
                        See Less
                    </button>
                </p>
            </div>
        </div>
    );
}

export default OurTeam;
