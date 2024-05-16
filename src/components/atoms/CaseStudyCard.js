import Image from 'next/image';

import RightArrow from "icon/blackRightArrow.svg";
import CaseStudyImg from "icon/caseStudyImg2.svg";

export default function CaseStudyCard() {

    return (
        <div className="w-[100%] shadow-[0_2px_10px_rgba(0,0,0,0.3)] gap-2 flex flex-col bg-[#ffffff] rounded-[9px]">
            <div className=''>
                <Image
                    src={CaseStudyImg}
                    alt="CaseStudyImg"
                    className='w-[100%] h-auto'
                />
            </div>
            <div className=' flex flex-col gap-[10px] px-3 pb-3'>
                <h1 className="text-[#000000] font-[700] text-[14px]">Charting New Horizons: The Digital Expedition of bytive</h1>
                <p className="text-[#000000] font-[300] text-[12px]">
                    Illustration of how bytive collaborated with a global
                    manufacturing firm enhance operational efficiency
                    through IT service optimization.
                </p>
                <button className="flex gap-2 justify-end items-center">
                    <p className="text-[#000000] font-[500] text-[12px]">Read More</p>
                    <Image
                        src={RightArrow}
                        alt="rightArrow"
                    />
                </button>
            </div>
        </div>
    );
}