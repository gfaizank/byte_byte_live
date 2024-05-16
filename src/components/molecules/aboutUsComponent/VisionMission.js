
import MissionVissionBg from "@/components/svgs/MissionVissionBg";
import Image from "next/image";

import MissionBg from "image/missionVissionBg.png";
import MissionImage from "icon/missionImage.svg";
import VisionImage from "icon/visionImage.svg";

export default function VisionMission() {
    return (
        <div className=" relative mx-[25px] flex flex-col sm:mx-[25px]">
            <div className="absolute top:0 left-[55%] h-[100%] md:top-[-5%] md:left-[55%] w-[100%]">
                <Image
                    src={MissionBg}
                    alt="missionBg"
                    className="border-[6px] rounded-t-[25px] border-[#ffffff]"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-[20px]">
                <div className="flex justify-center gap-[20px]">
                    <div className="w-[100%] px-5 py-5 flex flex-col sm:w-auto sm:col-span-4 gap-4  md:w-[45%]">
                        <div className="z-5 w-[100%] relative flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[0px]">
                                <h1 className=" text-[#000000] font-[400] text-left text-[24px] sm:text-[64px] sm:w-[75%] dark:text-white">Mission</h1>
                                <h3 className=" text-[#000000] font-[500] text-left text-[18px] sm:text-[20px] sm:w-[75%] dark:text-white">Journey Journals, Voices of Delight</h3>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-[#000000] font-[500] text-left sm:text-[14px]dark:text-[#ffffff]">
                                    At Bytive, we are driven by a passion for crafting outstanding software solutions that stand out for
                                </p>
                                <p className=" text-[#000000] font-[500] text-left sm:text-[14px] dark:text-[#ffffff]">
                                    At Bytive, we are driven by a passion for crafting outstanding
                                    software solutions that stand out for their clean code, agile methodologies,
                                    and exceptional user experiences. We are not just an IT solutions company;
                                    we are pioneers in turning complex business challenges into digital masterpieces.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="z-5 relative w-[100%] px-5 py-5 sm:px-[20px] md:w-[45%] ">
                        <Image
                            src={MissionImage}
                            alt="missionImage"
                            className="border-[6px] rounded-t-[25px] border-[#ffffff]"
                        />
                    </div>
                </div>

                {/* Vission Section */}
                <div className="flex justify-center gap-[20px]">
                    <div className="w-[100%] px-5 py-5 flex flex-col sm:w-auto sm:col-span-4 gap-4  md:w-[45%]">
                        <div className="z-5 w-[100%] relative flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[0px]">
                                <h1 className=" text-[#000000] font-[400] text-left text-[24px] sm:text-[64px] sm:w-[75%] dark:text-white">vision</h1>
                                <h3 className=" text-[#000000] font-[500] text-left text-[18px] sm:text-[20px] sm:w-[75%] dark:text-white">Setting Our Sights</h3>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-[#000000] font-[500] text-left sm:text-[14px] dark:text-[#ffffff]">
                                    Visionary Goals and Aspirations
                                </p>
                                <p className=" text-[#000000] font-[500] text-left sm:text-[14px] dark:text-[#ffffff]">
                                    At Bytive, we are driven by a passion for crafting outstanding
                                    software solutions that stand out for their clean code, agile methodologies,
                                    and exceptional user experiences. We are not just an IT solutions company;
                                    we are pioneers in turning complex business challenges into digital masterpieces.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="z-5 relative w-[100%] px-5 py-5 sm:px-[20px] md:left-[6%]  md:w-[45%]">
                        <Image
                            src={VisionImage}
                            alt="visionImage"
                            className="border-[6px] rounded-t-[25px] border-[#ffffff]"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}