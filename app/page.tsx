import HeroSection from "@/components/hero-sections/Hero";
import ServicesHomePage from "@/components/services/ServicesHomePage";
import OurTeam from "@/components/team/OurTeam";

export default function Home() {
    return (
        <div className="  ">
            <HeroSection />
            <ServicesHomePage />
            <OurTeam />
        </div>
    );
}
