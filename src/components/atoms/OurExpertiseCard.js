import Image from 'next/image';

export default function OurExpertiseCard({icon, title}) {
    return (
        <div className=" px-3 py-3 sm:h-[190px] md:w-[100%] flex flex-col justify-center sm:px-5 sm:py-4 dark:bg-neutral-800/30
           hover:bg-[#ffffff] hover:rounded-[22px] text-white hover:text-black
             cardGradientBorder dark:rounded-[15px] dark:bg-[#333333] dark:hover:bg-[#ffffff] dark:hover:text-black cardOnHover"
          >
            <div className={"mb-1"}>
                <Image
                    src={icon}
                    alt='serviceIcon'
                />
            </div>
            <p className={"text-[#000000] text-left text-[16px] font-[700] dark:text-inherit cardOnHoverText"}>{title}</p>
        </div>

    );
}