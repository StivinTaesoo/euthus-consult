import HeroSection from "@/components/hero-sections/Hero";
import ServicesHomePage from "@/components/services/ServicesHomePage";
import OurTeam from "@/components/team/OurTeam";

export default function Home() {
    return (
        <div className="  ">
            <HeroSection />
            <div className="w-[90%] mx-auto md:w-[80%]">
                <p className="w-full mt-[3rem] text-[16px] md:text-[18px]">
                    As an entrepreneur, protecting your business interests is
                    paramount, and registering your business not only lends it
                    legal credibility but also serves as a vital shield against
                    potential financial mismanagement, including the risk of
                    funds being misappropriated by a business partner. When you
                    officially register your business, you establish a clear
                    legal framework, outlining ownership structures,
                    responsibilities, and financial obligations. This
                    documentation not only solidifies your position as a
                    legitimate entity but also provides a transparent record of
                    financial agreements and expectations.
                </p>
            </div>
            <ServicesHomePage />
            <OurTeam />
        </div>
    );
}
