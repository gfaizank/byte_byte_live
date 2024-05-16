import Image from "next/image";


export function ButtonWithBorder({ buttonName, icon, borderColor }) {
    const borderStyle = {
        borderColor: borderColor,
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderRadius: '9px',
    };
    return (
        <button style={borderStyle} className={`w-[120px] py-5 px-4 gap-2 flex items-center justify-center border-${borderColor}-500 h-10 `}>
            <p className='text-inherit text-[14px] font-semibold whitespace-nowrap dark:text-[#0090BC]'>{buttonName}</p>
            {icon !== "none" && (
                <Image
                    src={icon}
                    width={20}
                    height={20}
                    alt="logo"
                />
            )}
        </button>
    );
}

export function RoundedButton({ icon, buttonName, bgColor, textColor, borderColor }) {
    return (
        <button className={` bg-${bgColor} border-${borderColor}-500 flex items-center justify-center rounded-[20px] px-3 py-1 border-[1px] border-opacity-15 cursor-pointer`}>
            {icon !== "none" && (
                <Image
                    src={icon}
                    width={20}
                    height={20}
                    alt="logo"
                />
            )}
            <p className={`text-${textColor} font-[300] text-[12px]`}>
                {buttonName}
            </p>
        </button>
    );
}