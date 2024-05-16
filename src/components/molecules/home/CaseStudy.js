import { ButtonWithBorder, RoundedButton } from "@/components/atoms/Button";
import Image from "next/image";

import DataScienceImage from "icon/dataScienceImage.svg";
import RightArrow from "icon/whiteRightArrow.svg";
import CaseStudyCard from "@/components/atoms/CaseStudyCard";
import BlueRightArrow from "icon/blueRightArrow.svg";
import DiscoverRightImg from "icon/discoverRightImg.svg";
import DiscoverLeftImg from "icon/discoverLeftImg.svg";
import DiscoverBottomImg from "icon/discoverBottomImg.svg";

export default function CaseStudy() {
    return (
        <div className="flex flex-col mx-[25px] sm:mx-[25px]">
            <div className="flex relative flex-col md:flex-row">
                <div className="flex text-nowrap px-8">
                    <h1 className="text-[#000000] text-[30px] font-[500] md:pt-0 md:text-[40px] dark:text-white"><span className="text-[#35C85E] sm:text-[40px] font-[500]">{'{'}</span>Case Study<span className="text-[#35C85E] sm:text-[40px] font-[500]">{'}'}</span></h1>
                </div>
                <div className="flex items-end pb-[15px] w-full bg-[#ffffff61] border-[#ffffff] border-[1px] border-b-[#e0f1fd] border-b-[2px] dark:bg-[#000000] dark:border-[#8f8f8f56] dark:border-b-[#0000007d]" style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px", position: "relative", bottom: "-1px", }}>
                    <p className="text-[#000000] px-3 pt-[20px] text-left text-wrap sm:w-[50%] text-[14px] font-[500] md:absolute left-[25%] top-[25px] md:text-center md:px-0 md:pt-0 dark:text-white">Prepare to embark on a thrilling expedition into the heart of data-driven discovery and technological innovation.</p>
                </div>
            </div>
            <div className="bg-[#ffffff61] pb-10 pt-10 flex flex-col items-center gap-5 w-full rounded-[12px] border-t-[0px] rounded-t-[0px] md:rounded-t-[12px]
                border-[#ffffff] border-[1px] dark:bg-[#0000007d] dark:border-[#8f8f8f56]
                   dark:border-[1px] dark:border-t-[#8f8f8f56]" style={{ borderTopRightRadius: "0px"}}>
                <div className="mb-5 px-5 flex flex-col justify-center gap-7 text-center sm:w-full sm:mb-0 sm:text-left md:flex-row ">
                    <div className="w-[100%]  shadow-[0_2px_10px_rgba(0,0,0,0.3)] gap-2 flex flex-col bg-[#3155FF] rounded-[9px] md:w-[35%] overflow-hidden md:flex-row">
                        <div className="w-[100%] md:w-[45%]">
                            <Image
                                src={DataScienceImage}
                                // width={30}
                                // height={30}
                                alt='dataScienceImage'
                                className="h-[100%] w-[100%] object-cover"
                            />
                        </div>
                        <div className="w-[100%] md:w-[55%] bg-[#3155FF] flex flex-col gap-[10px] py-2 px-3 rounded-[12px] ">
                            <h1 className="text-[#ffffff] text-left font-[700] text-[14px]">Charting New Horizons: The Digital Expedition of bytive</h1>
                            <p className="text-[#ffffff] text-left font-[300] text-[12px]">
                                Illustration of how bytive collaborated with a global
                                manufacturing firm enhance operational efficiency
                                through IT service optimization.
                            </p>
                            <div className=" flex gap-4 dataScienceBtn">
                                <RoundedButton
                                    icon={"none"}
                                    buttonName={"Data science"}
                                    bgColor={"tranparent"}
                                    borderColor={"#ffffff"}
                                    textColor={"white"}
                                />
                                <RoundedButton
                                    icon={"none"}
                                    buttonName={"Data science"}
                                    bgColor={"tranparent"}
                                    borderColor={"#ffffff"}
                                    textColor={"white"}
                                />
                            </div>
                            <div className=" flex gap-4 dataScienceBtn">
                                <RoundedButton
                                    icon={"none"}
                                    buttonName={"Generative AI"}
                                    bgColor={"tranparent"}
                                    borderColor={"#ffffff"}
                                    textColor={"white"}
                                />
                                <RoundedButton
                                    icon={"none"}
                                    buttonName={"+4"}
                                    bgColor={"tranparent"}
                                    borderColor={"#ffffff"}
                                    textColor={"white"}
                                />
                            </div>
                            <button className="flex gap-2 justify-end items-center">
                                <p className="text-[#ffffff] font-[500] text-[12px]">Read More</p>
                                <Image
                                    src={RightArrow}
                                    alt="rightArrow"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="w-[100%] flex gap-7 flex-col md:flex-row md:w-[22%]">
                        <CaseStudyCard />
                    </div>
                    <div className="w-[100%] flex gap-7 flex-col md:flex-row md:w-[22%]">
                        <CaseStudyCard />
                    </div>
                </div>

                <div className="mb-5 px-5 flex flex-col justify-center gap-7 text-center sm:w-full sm:mb-0 sm:text-left md:flex-row">
                    <div className=" w-[100%] flex flex-col gap-7 md:flex-row md:w-[22%]">
                        <CaseStudyCard />
                    </div>
                    <div className=" w-[100%] flex flex-col gap-7 md:flex-row md:w-[22%]">
                        <CaseStudyCard />
                    </div>
                    <div className=" w-[100%] flex flex-col gap-7 md:flex-row md:w-[22%]">
                        <CaseStudyCard />
                    </div>
                        <div className=" px-[25px] py-[25px] relative w-[100%] bg-gradient-to-b from-[#3168ff8c] to-[#ECEFF9]  pb-3 flex flex-col justify-center bg-[#ffffff] rounded-[9px] gap-[10px] md:px-3 pmd:py-0 md:w-[22%]">
                            <h1 className="text-[#000000] text-left font-[700] text-[20px]">Discover more case studies.</h1>
                            <p className="text-[#000000] text-left font-[300] text-[12px]">View our complete collection of case studies.</p>
                            <div className="shadow-[0_2px_10px_rgba(0,0,0,0.3)] w-min rounded-[9px] text-[#3155FF]">
                                <ButtonWithBorder buttonName={"View More"} borderColor={"#3155FF"} icon={BlueRightArrow} />
                            </div>
                            <Image
                                src={DiscoverRightImg}
                                alt='discoverRightImg'
                                className="absolute top-0 right-0"
                            />
                            <Image
                                src={DiscoverLeftImg}
                                alt='discoverLeftImg'
                                className="absolute top-0 left-0"
                            />
                            <Image
                                src={DiscoverBottomImg}
                                alt='discoverBottomImg'
                                className="absolute right-0 bottom-0"
                            />
                        </div>

                </div>


            </div>
        </div>
    );
}