import { ButtonWithBorder } from "@/components/atoms/Button";

import RightArrow from "icon/blueRightArrow.svg";

export default function ContactUsSection() {
    return (
        <div className="flex flex-col gap-6 mx-[25px] md:mx-[25px] md:pl-52">
            <div className="flex flex-col">
                <h1 className="text-[#0090BC] font-[700] text-[30px] md:text-[70px]">Contact Us</h1>
                <h3 className="text-[#004DC0] font-[700] text-[20px] md:text-[18px]">Are you ready?</h3>
            </div>
            <div className="flex flex-col gap-3 md:gap-0">
                <h1 className="text-[#000000] font-[600] text-[15px] md:text-[30px] dark:text-white"> <span className="text-[#B40FE7]">if:</span> you are ready to start <span className="text-[#0F18E7] sm:text-[30px] font-[700]">{'{'}</span><span className="text-[#B40FE7]">the project</span><span className="text-[#0F18E7] sm:text-[30px] font-[500]">{'}'}</span></h1>
                <div className="flex gap-7 items-center">
                    <h1 className="text-[#000000] font-[600] text-[15px] md:text-[30px] dark:text-white">then <span className="text-[#35C85E] sm:text-[40px] font-[500]">{'{'}</span><span className="text-[#B40FE7]">submit the form</span><span className="text-[#35C85E] sm:text-[40px] font-[500]">{'}'}</span> </h1>
                    <div className=" rounded-[9px] shadow-[0_2px_3px_rgba(0,0,0,0.3)] text-[#3155FF]">
                        <ButtonWithBorder buttonName={"I’m Ready"} borderColor={"#3155FF"} icon={RightArrow} />
                    </div>
                </div>
            </div>
        </div>
    );
}