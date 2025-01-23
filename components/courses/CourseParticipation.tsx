import React from "react";

function CourseParticipation() {
    return (
        <div className="w-full ">
            <div className="w-[90%] flex flex-col items-center gap-4 py-10 mx-auto  md:flex-row md:w-[80%] ">
                <h1 className="w-full uppercase font-bold text-center text-2xl md:text-6xl md:w-[50%]">
                    About 5,700 participants have taken this online course
                </h1>
                <div className="w-full md:w-[50%]">
                    <img
                        src="./images/image-13.jpg"
                        alt="Course Participants"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default CourseParticipation;
