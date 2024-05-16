"use Client"
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

import { FaMoon } from "react-icons/fa"
import { BsSunFill } from "react-icons/bs"
import { LuSun } from "react-icons/lu";
import { BsMoonStars } from "react-icons/bs";

export default function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext)
    const [themeState, setThemeState] = useState("light")

    useEffect(() => {
        setThemeState(theme);
    }, [theme]);

    return (
        <div className="relative w-[75px] h-[35px] flex items-center bg-[#2b2b37] cursor-pointer rounded-[20px] p-1"
            onClick={() => {
                if (themeState == "dark") {
                    setTheme("light")
                } else {
                    setTheme("dark")
                }
            }}
        >
            <button className="relative z-[1] bg-transparent cursor-pointer border-none w-[50%] h-[100%] inline-flex 
              justify-center items-center rounded-[20px] p-[2px]"
                style={{ background: themeState === "light" ? "white" : "transparent" }}
            >
                <LuSun
                    size={18}
                    style={{ color: themeState == "light" ? "black" : "white" }}
                />
            </button>
            <button className="relative z-[1] bg-transparent cursor-pointer border-none w-[50%] h-[100%] inline-flex 
              justify-center items-center rounded-[20px] p-[2px]"
                style={{ background: themeState === "dark" ? "black" : "transparent" }}
            >
                <BsMoonStars
                    size={18}
                    style={{ color: themeState == "light" ? "white" : "white" }}
                />
            </button>

        </div>





        // <div className="relative w-16 h-8 flex items-center dark:bg-gray-900
        //  bg-teal-500 cursor-pointer rounded-full p-1"
        //     // onClick={() => setDarkMode(!darkMode)}
        //     onClick={() => {
        //         console.log("222",theme)
        //         if(theme=="dark"){
        //             setTheme("light")
        //         }else{
        //             setTheme("dark")
        //         }
        // }}
        // >
        //     <FaMoon
        //         className="text-white"
        //         size={18}
        //     />
        //     <div className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full 
        //          shadow-md transform transition-transform duration-300"
        //         style={
        //             theme == "light" ? { left: "2px" } : { right: "2px" }
        //         }
        //     >
        //         <BsSunFill
        //             className=" ml-auto text-yellow-400"
        //             size={18}
        //         />
        //     </div>

        // </div>
    );
}