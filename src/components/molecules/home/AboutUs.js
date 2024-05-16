import { ButtonWithBorder } from "@/components/atoms/Button";

import AboutUsSlider from "../sliders/AboutUsSlider";
import RightArrow from "icon/blueRightArrow.svg";
import ChartingNewSvg from "@/components/svgs/ChartingNewSvg";

export default function AboutUs() {
    return (
        <div className="mx-[25px] flex flex-col sm:mx-[25px]">
            <div className="flex relative flex-col md:flex-row">
                <div className="flex text-nowrap px-8">
                    <h1 className="text-[#000000] text-[30px] font-[500] md:pt-0 md:text-[40px] dark:text-white"><span className="text-[#35C85E] sm:text-[40px] font-[500]">{'{'}</span>About Us<span className="text-[#35C85E] sm:text-[40px] font-[500]">{'}'}</span></h1>
                </div>
                <div className="flex items-end pb-[15px] w-full bg-[#ffffff61] border-[#ffffff] border-[1px] border-b-[#e0f1fd] border-b-[2px] dark:bg-[#000000] dark:border-[#8f8f8f56] dark:border-b-[#0000007d]" style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px", position: "relative", bottom: "-1px", }}>
                    <p className="text-[#000000] px-3 pt-[20px] text-left text-wrap sm:w-[50%] text-[14px] font-[500] md:absolute left-[25%] top-[25px] md:px-0 md:pt-0 md:text-center dark:text-white">Prepare to embark on a thrilling expedition into the heart of data-driven discovery and technological innovation.</p>
                </div>
            </div>
            <div className="bg-[#ffffff61] w-[100%] pb-10 pt-10 flex flex-col items-center gap-5 rounded-[12px] border-t-[0px]
                    rounded-t-[0px] md:rounded-t-[12px]  border-[#ffffff] border-[1px] dark:bg-[#0000007d] dark:border-[#8f8f8f56]
                     dark:border-[1px] dark:border-t-[#8f8f8f56]" style={{ borderTopRightRadius: "0px" }}>
                <div className="w-[100%] px-5 flex flex-col items-center text-center md:w-[95%] sm:mb-0 md:grid md:grid-cols-10 md:text-text gap-3">
                    <div className=" relative w-full px-5 py-5 flex flex-col sm:w-auto sm:col-span-4 gap-4 sm:px-[20px] md:pl-[95px] sm:py-[30px]">
                        <div className="chartingBgImage">
                            <ChartingNewSvg />
                        </div>
                        <h1 className=" z-5 relative text-[#3155FF] font-[700] text-left sm:text-[24px] sm:w-[75%] ">Charting New Horizons: The Digital Expedition of bytive</h1>
                        <p className="z-5 relative text-[#000000] font-[600] text-left sm:text-[14px] sm:w-[99%] dark:text-[#ffffff]">
                            At Bytive, we are driven by a passion for crafting outstanding
                            software solutions that stand out for their clean code, agile methodologies,
                            and exceptional user experiences. We are not just An IT solutions company;
                            we are pioneers in turning complex business challenges into digital masterpieces.
                        </p>
                        <div className=" z-5 relative text-[#3155FF]">
                            <ButtonWithBorder buttonName={"View More"} borderColor={"#3155FF"} icon={RightArrow} />
                        </div>
                    </div>
                    <div className="w-[100%] flex flex-col md:w-auto md:col-span-6">
                        <AboutUsSlider />
                    </div>
                </div>
            </div>
        </div>
    );
}