import 'react-multi-carousel/lib/styles.css';
import OurClientsSlider from "../sliders/OurClientsSlider";

export default function OurClients() {
    return (
        <div className="flex flex-col mx-[25px] sm:mx-[25px]">
            <div className="flex relative flex-col md:flex-row">
                <div className="flex text-nowrap px-8">
                    <h1 className="text-[#000000] text-[30px] font-[500] md:pt-0 md:text-[40px] dark:text-white ">Our <span className="text-[#13C4FA] sm:text-[40px] font-[500]">{'{'}</span>Clients<span className="text-[#13C4FA] sm:text-[40px] font-[500]">{'}'}</span></h1>
                </div>
                <div className="flex items-end w-full pb-[15px] bg-[#ffffff61] border-[#ffffff] border-[1px] border-b-[#e0f1fd] border-b-[2px] dark:bg-[#000000] dark:border-[#8f8f8f56] dark:border-b-[#0000007d]" style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px", position:"relative", bottom:"-1px", }}>
                    <p className="text-[#000000] text-[14px] px-3 pt-[20px] font-[500] md:absolute left-[25%] md:px-0 md:pt-0 dark:text-white">Meet the dynamic individuals who drive innovation and excellence at Bytive </p>
                </div>
            </div>
            <div className="bg-[#ffffff61] pb-10 pt-10 flex flex-col items-center gap-5 w-full rounded-[12px] 
                  border-t-[0px] rounded-t-[0px] md:rounded-t-[12px] border-[#ffffff] border-[1px]
                dark:bg-[#0000007d] dark:border-[#8f8f8f56] dark:border-[1px] dark:border-t-[#8f8f8f56]" 
                style={{ borderTopRightRadius: "0px"}}>
               <OurClientsSlider />
            </div>
        </div>
    );
}