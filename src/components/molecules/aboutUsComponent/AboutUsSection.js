
import AboutUsBg from "@/components/svgs/AboutUsBg";
import Image from "next/image";

import AboutUsRightImg from "icon/aboutUsImage.svg";

export default function AboutUsSection() {
    return (
        <div className=" mx-[25px] flex flex-col justify-center md:flex-row sm:mx-[25px] md:mt-[40px] gap-[120px] py-[10%}">
            <div className=" w-[100%] relative px-5 py-5 flex flex-col sm:col-span-4 gap-4 sm:px-[20px] sm:py-[30px] md:w-[45%]">
                <div className="absolute top-[10%] left-[-4%] w-[100%] h-[100%] sm:left-[70%] sm:py-[30px] sm:top-[-20%]">
                    <AboutUsBg />
                </div>
                <div className="z-5 relative flex flex-col gap-[30px]">
                    <h1 className=" text-[#000000] font-[400] text-left text-[24px] sm:text-[64px] dark:text-white">About us</h1>
                    <div className="flex flex-col gap-[40px]">
                        <p className="text-[#000000] font-[500] text-left sm:text-[14px] sm:w-[94%] dark:text-[#ffffff]">
                            At Bytive, we are driven by a passion for crafting outstanding
                            software solutions that stand out for their clean code, agile methodologies,
                            and exceptional user experiences. We are not just an IT solutions company;
                            we are pioneers in turning complex business challenges into digital masterpieces.
                        </p>
                        <p className=" text-[#000000] font-[500] text-left sm:text-[14px] sm:w-[94%] dark:text-[#ffffff]">
                            At Bytive, we are driven by a passion for crafting outstanding
                            software solutions that stand out for their clean code, agile methodologies,
                            and exceptional user experiences. We are not just an IT solutions company;
                            we are pioneers in turning complex business challenges into digital masterpieces.
                        </p>
                    </div>
                </div>
            </div>

            <div className=" relative w-[100%] h-[100%] px-5 py-10 flex justify-center items-center md:w-[45%] md:py-[-10%] ">
                <Image
                    src={AboutUsRightImg}
                    alt="aboutUsImg"
                    className="border-[6px] rounded-[200px] border-[#ffffff]"
                />
            </div>
        </div>
    );
}


