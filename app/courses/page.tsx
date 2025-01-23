import CourseOutline from "@/components/courses/CourseOutline";
import CourseParticipation from "@/components/courses/CourseParticipation";
import CoursePayment from "@/components/courses/CoursePayment";
import HeroForPages from "@/components/hero-sections/HeroForPages";

export default function Courses() {
    return (
        <div className="">
            <HeroForPages
                title="Courses"
                descText="This Course is ideal for anyone looking to earn money by offering CAC Registration services, including CAC agents, CAC service providers, and business owners aiming to operate professionally."
                imgSrc="./images/image-5.jpeg"
            />
            <CourseParticipation />
            <CourseOutline />
            <CoursePayment />
        </div>
    );
}
