import TrainingGroups from "./TrainingGroups";
import FooterLogo from "./FooterLogo";
import FooterSocials from "./FooterSocials";

function Footer() {
    return (
        <div className="mt-10">
            <div
                className={`w-full h-[560px]  bg-cover bg-center relative overflow-hidden md:h-[300px]`}
                style={{ backgroundImage: `url(./images/image-10.jpeg)` }}
            >
                <div className="w-full h-full bg-transGrey text-white absolute top-0 flex flex-col items-center justify-center ">
                    {/* Circles */}
                    <div className="w-[200px] h-[200px] absolute top-[-70] left-[-15] opacity-30 border-[1px] border-blue-300 rounded-full md:w-[300px] md:h-[300px] md:left-[-30]"></div>
                    <div className="w-[90%] flex flex-col justify-between gap-10 lg:flex-row lg:w-[80%] ">
                        <FooterLogo />
                        <TrainingGroups />
                        <FooterSocials />
                    </div>
                    <p className="text-sm mt-6 text-whitesmoke md:text-base">
                        Copyright &copy; 2024 - Euthus Consult
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
