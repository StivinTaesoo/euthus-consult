import HeroForPages from "@/components/hero-sections/HeroForPages";
import JTB from "@/components/jtb/JTB";

function Jtb() {
    return (
        <div>
            <HeroForPages
                title="JTB"
                descText="This Course is ideal for anyone looking to earn money by offering CAC Registration services, including CAC agents, CAC service providers, and business owners aiming to operate professionally."
                imgSrc="./images/image-2.jpeg"
            />
            <div className="w-[90%] mx-auto my-20  flex flex-col justify-center gap-8 md:flex-row md:w-[80%]">
                <JTB
                    title="JTB Tin"
                    desc="You can now get your JTB tin within 24hours at only 1k.  Join the community here "
                    image="./images/image-4.jpeg"
                    link="https://chat.whatsapp.com/C8Dx5lY8bhvGupk9RzMg6O"
                    bgColor="#030e79"
                />
                <JTB
                    title="Tax Services"
                    desc="You can also access our FIRs , Taxpromax service and Tax Clarence Service  here "
                    image="./images/image-1.jpeg"
                    link="https://chat.whatsapp.com/Gykam388hVjE4IN9PFzTE0"
                    bgColor="orangered"
                />
                <JTB
                    title="Affidavites"
                    desc="For facilitation of Scuml, Newspaper publication and Affidavites  join the community here  "
                    image="./images/image-3.jpeg"
                    link="https://chat.whatsapp.com/F5EZjTEpARf5XwH5NIShIn"
                    bgColor="#030e79"
                />
            </div>
        </div>
    );
}

export default Jtb;
