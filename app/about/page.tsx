import HeroForPages from "@/components/hero-sections/HeroForPages";

export default function About() {
    return (
        <div className="">
            <HeroForPages
                title="About Us"
                descText="We are thrilled to let you know who we are what we stand for"
                imgSrc="./images/image-6.jpeg"
            />
            <div className="w-[90%] mx-auto mt-[3rem] md:w-[80%]">
                <p className="w-full  text-[16px] md:text-[18px]">
                    Beyond registering your Business with CAC and all the
                    accompanying benefits, we are giving you the opportunity to
                    Learn How To Register Businesses With CAC & send consistent
                    “cash” into your Bank Accounts even if all you have is a
                    smartphone.
                </p>
                <p className="w-full mt-[1rem] text-[16px] md:text-[18px]">
                    CAC registration is one side gig that is simple to learn and
                    easy to implement. You don't have to be a lawyer or an
                    accountant to do this. The CAC has broken the monopoly that
                    existed before now and made it open. The internet on the
                    other hand has made it very easy for “anyone” with internet
                    connection to make money even from the comfort of their
                    homes and CAC Business Registration is one that anyone can
                    do from home; with either a smartphone or laptop and
                    internet connection you are good to go.
                </p>
                <p className="w-full mt-[1rem] text-[16px] md:text-[18px]">
                    At Euthus Consult, we understand the importance of proper
                    business registration and compliance. Our team is dedicated
                    to providing personalized services to each client, ensuring
                    that their business needs are met. Our aim is to provide
                    efficient and reliable business registration services, while
                    maintaining the highest level of professionalism and
                    integrity.
                </p>
            </div>
        </div>
    );
}
