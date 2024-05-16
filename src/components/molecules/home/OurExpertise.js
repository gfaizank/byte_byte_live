
import Image from "next/image";

// import ExpertiseBgImg from "../../svgs/ExpertiseBgImg";
import OurExpertiseCardRow from "./OurExpertiseCardRow";
import ExpertiseBackground from "./ExpertiseBackground";

export default function OurExpertise() {

    return (
        <div className="flex flex-col mx-[25px] sm:mx-[25px]">
            <div className="flex relative flex-col md:flex-row">
                <div className="flex text-nowrap px-8">
                    <h1 className="text-[#000000] text-[30px] font-[500] md:pt-0 md:text-[40px] dark:text-white">
                        Our{" "}
                        <span className="text-[#13C4FA] sm:text-[40px] font-[500]">
                            {"{"}
                        </span>
                        Expertise
                        <span className="text-[#13C4FA] sm:text-[40px] font-[500]">
                            {"}"}
                        </span>
                    </h1>
                </div>
                <div
                    className="flex items-end pb-[15px] w-full bg-[#ffffff61] border-[#ffffff80] border-[1px] border-b-[#e0f1fd] border-b-[2px] dark:bg-[#000000] dark:border-[#8f8f8f56] dark:border-b-[#0000007d]"
                    style={{
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                        position: "relative",
                        bottom: "-1px",
                    }}
                >
                    <p className="text-[#000000] px-3 pt-[20px] text-[14px] font-[500] md:px-0 md:pt-0 md:absolute left-[25%] dark:text-white">
                        what ever you need, we build
                    </p>
                </div>
            </div>
            <div
                className=" bg-[#ffffff61] pt-10 flex flex-col items-center gap-5 w-full rounded-[12px] rounded-t-[0px] 
                md:rounded-t-[12px] border-[#ffffff] border-[1px] dark:bg-[#0000007d] dark:border-[#8f8f8f56]
                dark:border-[1px] dark:border-t-[#8f8f8f56]"
                style={{ borderTopRightRadius: "0px" }}
            >
                <ExpertiseBackground />
                <div className="w-full">
                    <OurExpertiseCardRow />
                </div>
            </div>
        </div>
    );
}