import MissionVissionBg from "@/components/svgs/MissionVissionBg";
import Image from "next/image";

import MissionBg from "image/missionVissionBg.png";
import MissionImage from "icon/missionImage.svg";
import VisionImage from "icon/visionImage.svg";

export default function VisionMission() {
  return (
    <div className=" relative mx-[25px] flex flex-col sm:mx-[25px]">
      <div className="flex lg:hidden flex-col lg:mt-0 mt-10 gap-[0px]">
        <h1 className=" text-[#000000] font-[400] text-left text-[24px] sm:text-[64px] sm:w-[75%] dark:text-white">
          Mission
        </h1>
        <h3 className=" text-[#000000] font-[500] lg:mb-0 mb-14 lg:mt-0 mt-6 text-left text-[18px] sm:text-[20px] sm:w-[75%] dark:text-white">
          Journey Journals, Voices of Delight
        </h3>
      </div>
      <div className="absolute top-64 lg:top:0 lg:left-[55%] lg:h-[100%] h-[10vh] md:top-[-5%] md:left-[55%] w-[100%]">
        <Image
          src={MissionBg}
          alt="missionBg"
          className="border-[6px] rounded-t-[25px] border-[#ffffff]"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="flex justify-center flex-col-reverse lg:flex-row gap-[20px]">
          <div className="w-[100%] px-5 py-5 flex flex-col sm:w-auto sm:col-span-4 gap-4  md:w-[45%]">
            <div className="z-5 w-[100%] relative flex flex-col gap-[30px]">
              <div className="lg:flex hidden flex-col gap-[0px]">
                <h1 className=" text-[#000000] font-[400] text-left text-[24px] sm:text-[64px] sm:w-[75%] dark:text-white">
                  Mission
                </h1>
                <h3 className=" text-[#000000] font-[500] text-left text-[18px] sm:text-[20px] sm:w-[75%] dark:text-white">
                  Journey Journals, Voices of Delight
                </h3>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[#000000] font-[500] text-left sm:text-[14px]dark:text-[#ffffff]">
                  At Bytive, we are driven by a passion for crafting outstanding
                  software solutions that stand out for
                </p>
                <p className=" text-[#000000] font-[500] text-left sm:text-[14px] dark:text-[#ffffff]">
                  At Bytive, we are driven by a passion for crafting outstanding
                  software solutions that stand out for their clean code, agile
                  methodologies, and exceptional user experiences. We are not
                  just an IT solutions company; we are pioneers in turning
                  complex business challenges into digital masterpieces.
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
        <div className="flex justify-center flex-col lg:flex-row gap-[20px]">
          <div className="w-[100%] px-5 py-5 flex flex-col sm:w-auto sm:col-span-4 gap-4  md:w-[45%]">
            <div className="z-5 w-[100%] relative flex  flex-col gap-[30px]">
              <div className="flex flex-col gap-[0px]">
                <h1 className=" text-[#000000] font-[400] text-left text-[24px] sm:text-[64px] sm:w-[75%] dark:text-white">
                  Vision
                </h1>
                <h3 className=" text-[#000000] font-[500] lg:mt-0 mt-6 text-left text-[18px] sm:text-[20px] sm:w-[75%] dark:text-white">
                  Setting Our Sights
                </h3>
              </div>
              <div className="z-10 relative w-[100%] lg:hidden flex px-5 py-5 sm:px-[20px] md:left-[6%]  md:w-[45%]">
            <Image
              src={VisionImage}
              alt="visionImage"
              className="border-[6px] rounded-t-[25px] border-[#ffffff]"
            />
          </div>
              <div className="flex flex-col z-50 gap-[20px]">
                <p className="text-[#000000] font-[500] text-left sm:text-[14px] dark:text-[#ffffff]">
                  Visionary Goals and Aspirations
                </p>
                <p className=" text-[#000000] font-[500] text-left sm:text-[14px] dark:text-[#ffffff]">
                  At Bytive, we are driven by a passion for crafting outstanding
                  software solutions that stand out for their clean code, agile
                  methodologies, and exceptional user experiences. We are not
                  just an IT solutions company; we are pioneers in turning
                  complex business challenges into digital masterpieces.
                </p>
              </div>
            </div>
          </div>
          <div className="z-10 relative w-[100%] lg:flex hidden px-5 py-5 sm:px-[20px] md:left-[6%]  md:w-[45%]">
            <Image
              src={VisionImage}
              alt="visionImage"
              className="border-[6px]  rounded-t-[25px] border-[#ffffff]"
            />
          </div>
          <div className="absolute z-5 top-[1100px] lg:top:0 lg:left-[55%] lg:hidden flex left-0 lg:h-[100%] h-[5vh] md:top-[-5%] md:left-[55%] w-[100%]">
        <Image
          src={MissionBg}
          alt="missionBg"
          className="border-[6px] rounded-t-[25px] h-[524px] border-[#ffffff]"
        />
      </div>
        </div>
      </div>
    </div>
  );
}
