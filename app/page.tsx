import HeroSection from "@/components/hero-sections/Hero";
import OurBusiness from "@/components/home/OurBusiness";
import OurExperience from "@/components/home/OurExperience";
import ServicesHomePage from "@/components/services/ServicesHomePage";
import OurTeam from "@/components/team/OurTeam";

export default function Home() {
    return (
        <div className="  ">
            <HeroSection />
            <OurBusiness />
            <ServicesHomePage />
            <OurTeam />
            <OurExperience />
        </div>
    );
}
