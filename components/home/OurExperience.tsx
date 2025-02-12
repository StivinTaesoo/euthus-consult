import React from "react";

function OurExperience() {
    return (
        <div className="w-full py-[3rem] bg-[#d7d7d8] md:py-[4rem]">
            <div className="w-[90%] mx-auto text-center md:w-[80%] md:text-left ">
                <div className="uppercase text-center md:text-left">
                    <p className="py-1">work with us</p>
                    <h2 className="max-w-[150px] mx-auto font-semibold text-center text-3xl md:max-w-[200px] md:text-5xl md:text-left md:mx-0">
                        we are{" "}
                        <span className="font-bold text-center">authentic</span>
                    </h2>
                </div>
                <div className="flex flex-col justify-center mt-4 gap-4 md:flex-row">
                    <div className="w-full">
                        <h3 className="w-[100%] text-3xl border-b-2 py-2 md:text-5xl md:[50%]">
                            6<span className="text-xl md:text-3xl ">+</span>
                        </h3>
                        <p className="py-2">Years of Experience</p>
                    </div>
                    <div className="w-full">
                        <h3 className="w-[100%] text-3xl border-b-2 py-2 md:text-5xl md:[50%]">
                            5.7k<span className="text-xl md:text-3xl ">+</span>
                        </h3>
                        <p className="py-2">Training Participants</p>
                    </div>
                    <div className="w-full">
                        <h3 className="w-[100%] text-3xl border-b-2 py-2 md:text-5xl md:[50%]">
                            15k<span className="text-xl md:text-3xl ">+</span>
                        </h3>
                        <p className="py-2">Satisfied Clients</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurExperience;
