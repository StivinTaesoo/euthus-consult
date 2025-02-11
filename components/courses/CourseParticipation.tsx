/* eslint-disable @next/next/no-img-element */

import React from "react";

function CourseParticipation() {
    return (
        <div className="w-full ">
            <div className="w-[90%] flex flex-col items-center gap-10 py-10 mx-auto  md:flex-row md:w-[80%] ">
                <h1 className="w-full uppercase font-bold text-center text-black text-2xl md:text-5xl md:w-[50%]">
                    About{" "}
                    <span className="text-blue-900">5,700 participants</span>{" "}
                    have taken this online course
                </h1>
                <div className="w-full md:w-[50%] md:h-[500px]">
                    <img
                        src="./images/image-13.jpg"
                        alt="Course Participants"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default CourseParticipation;
