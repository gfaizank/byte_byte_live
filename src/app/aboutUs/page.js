import { ButtonWithBorder } from "@/components/atoms/Button";
import Layout from "@/components/molecules/Layout";
import AboutUsSection from "@/components/molecules/aboutUsComponent/AboutUsSection";
import VisionMission from "@/components/molecules/aboutUsComponent/VisionMission";

import RightArrow from "icon/blueRightArrow.svg";

const AboutUsPage = () => {
    return (
        <section className="bg-[#ffffff] relative flex flex-col justify-center 
            items-center py-[30px] overflow-hidden  dark:bg-black"
        >
            <Layout className="flex min-h-screen flex-col items-center justify-between p-24">
                <AboutUsSection />

                <div className="counterBgImage relative h-[326px] px-[50px] bg-blend-overlay py-10 flex flex-col text-center gap-[20px] items-center w-[100%] mt-[6rem] sm:w-[100%] md:w-[100%] sm:grid-cols-3 md:grid md:flex-row">
                    <div className="absolute inset-0 bg-[#000000] opacity-50 sm:opacity-50 "></div>
                    <div className="z-3 relative text-white w-[90%] md:w-[90%]">
                        <h1 className="text-inherit text-[24px] font-[400] md:text-[64px] drop-shadow-md drop-shadow(#000000)">10+</h1>
                        <p className="text-inherit text-[15px] font-[400] md:text-[24px]">Blossoming with a vibrant array of clients</p>
                    </div>
                    <div className="z-3 relative text-white w-[90%] md:w-[90%]">
                        <h1 className="text-inherit text-[24px] font-[400] md:text-[64px] drop-shadow-md filter: drop-shadow(0 0 #0000)">20+</h1>
                        <p className="text-inherit text-[15px] font-[400] md:text-[24px]">Dedicated team propels us forward</p>
                    </div>
                    <div className="z-3 relative text-white w-[90%] md:w-[90%]">
                        <h1 className="text-inherit text-[24px] font-[400] md:text-[64px] drop-shadow-md filter: drop-shadow(0 0 #0000)">15+</h1>
                        <p className="text-inherit text-[15px] font-[400] md:text-[24px]">Projects successfully written with expertise</p>
                    </div>
                </div>

                <VisionMission />

                <div className="contactSectionBg relative w-[100%] h-[326px] px-[50px] py-10 bg-blend-overlay flex flex-col gap-[20px] mt-[6rem] sm:w-[100%]">
                    <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
                    <div className="z-5 relative w-[100%] flex flex-col gap-6 md:pl-[20px]">
                        <div className="flex flex-col w-[33%] md:w-[45%]">
                            <h1 className="text-[#ffffff] font-[400] text-[30px] md:text-[64px]">Contact Us</h1>
                            <h3 className="text-[#ffffff] font-[700] text-[20px] md:text-[24px]">
                                Byte Back: Let's Bytify Your Connection with
                                <span className="text-[#0F25E7]">Bytive</span> 
                            </h3>
                        </div>
                        <div className="w-[50%] flex gap-3 items-center md:gap-7 md:w-[50%]">
                            <h1 className="text-[#ffffff] font-[400] text-[15px] md:text-[16px]">Unleash Your Thoughts: Contact Us to Spark Conversations</h1>
                            <div className="rounded-[9px] shadow-[0_2px_3px_rgba(0,0,0,0.3)] text-white">
                                <ButtonWithBorder buttonName={"I’m Ready"} borderColor={"#ffffff"} icon={RightArrow} />
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </section>
    );
}

export default AboutUsPage;