import TestimonialSlider from "../sliders/TestimonialSlider";

export default function Testimonial() {
    return (
        <div className="flex flex-col mx-[25px] md:mx-[25px]">
            <div className="flex relative flex-col md:flex-row">
                <div className="flex text-nowrap px-8">
                    <h1 className="text-[#000000] text-[30px] font-[500] md:pt-0 md:text-[40px] dark:text-white"><span className="text-[#B40FE7] sm:text-[40px] font-[500]">{'{'}</span>Testimonial<span className="text-[#B40FE7] sm:text-[40px] font-[500]">{'}'}</span></h1>
                </div>
                <div className="flex items-end pb-[15px] w-full bg-[#ffffff61] border-[#ffffff] border-[1px] border-b-[#e0f1fd] border-b-[2px] dark:bg-[#000000] dark:border-[#8f8f8f56] dark:border-b-[#0000007d]" style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px", position:"relative", bottom:"-1px", }}>
                    <p className="text-[#000000] px-3 pt-[20px] text-center text-wrap sm:w-[50%] text-[14px] font-[500] absolute left-[13%] top-[25px] md:px-0 md:pt-0 dark:text-white">Journey Journals, Voices of Delight</p>
                </div>
            </div>
            <div className="bg-[#ffffff61] pb-10 pt-10 flex flex-col items-center gap-5 w-full rounded-[12px] border-t-[0px] 
                rounded-t-[0px] md:rounded-t-[12px]  border-[#ffffff] border-[1px] dark:bg-[#0000007d] dark:border-[#8f8f8f56]
                dark:border-[1px] dark:border-t-[#8f8f8f56]" style={{ borderTopRightRadius: "0px"}}>
                <TestimonialSlider />
            </div>
        </div>
    );
}