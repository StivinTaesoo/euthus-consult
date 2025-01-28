import HeroForPages from "@/components/hero-sections/HeroForPages";
import ServicesContainer from "@/components/services/ServicesContainer";

export default function Services() {
    return (
        <div className="">
            <HeroForPages
                title="Our Services"
                descText="We help you register your business name and company with the Corporate Affairs Commission (CAC) in Nigeria. Let us know how we can be of help to you."
                imgSrc="./images/image-7.jpeg"
            />
            <div className="">
                <ServicesContainer />
            </div>
        </div>
    );
}
