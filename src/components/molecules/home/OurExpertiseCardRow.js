"use client"

import OurExpertiseCard from "@/components/atoms/OurExpertiseCard";
import Image from "next/image";

import DevOpsServicesIcon from "icon/DevOpsServices.svg";
import DevOpsServicesDarkIcon from "icon/DevOpsServicesDarkMode.svg";
import WebDevIcon from "icon/webDevIcon.svg";
import WebDevelopmentDarkIcon from "icon/WebDevelopmentDarkIcon.svg";
import MobileDevelopmentIcon from "icon/MobileDevelopmentIcon.svg";
import MobileDevelopmentDarkIcon from "icon/MobileDevelopmentDarkIcon.svg";
import GenerativeAiIcon from "icon/GenerativeAiIcon.svg";
import GenerativeAiDarkIcon from "icon/GenerativeAiDarkIcon.svg";
import QualityEngineeringIcon from "icon/QualityEngineeringIcon.svg";
import QualityEngineeringDarkIcon from "icon/QualityEngineeringDarkIcon.svg";
import DataScienceIcon from "icon/DataScienceIcon.svg";
import DataScienceDarkIcon from "icon/DataScienceDarkIcon.svg";
import CybersecurityIcon from "icon/CybersecurityIcon.svg";
import CybersecurityDarkIcon from "icon/CybersecurityDarkIcon.svg";
import { ThemeContext } from "../ThemeProvider";
import { useContext,useEffect, useState } from "react";

export default function OurExpertiseCardRow() {
    const [themeState, setThemeState] = useState("light")
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setThemeState(theme);
    }, [theme]);
    // console.log("🚀 ~ OurExpertiseCardRow ~ theme:", theme)
  
    return (
        <div className="w-full flex flex-col items-center gap-[20px]">
            <div className="relative flex flex-col justify-center text-center gap-4 w-[70%] sm:w-[70%] md:w-[50%] sm:mb-0 sm:grid-cols-4 sm:text-left md:flex-row">
                <OurExpertiseCard
                    icon={themeState === "light" ? DevOpsServicesIcon : DevOpsServicesDarkIcon}
                    title={"DevOps Services"}
                />
                <OurExpertiseCard
                    icon={themeState === "light" ? WebDevIcon : WebDevelopmentDarkIcon}
                    title={"Web Development"}
                />
                <OurExpertiseCard
                    icon={themeState === "light" ? MobileDevelopmentIcon : MobileDevelopmentDarkIcon}
                    title={"Mobile Development"}
                    />
            </div>
            <div className="pb-10 flex flex-col text-center gap-4 w-[70%] sm:w-[70%] md:w-[65%] sm:m-0 sm:grid-cols-4 sm:text-left md:grid md:flex-row">
                <OurExpertiseCard
                    icon={themeState === "light" ? GenerativeAiIcon : GenerativeAiDarkIcon}
                    title={"Generative AI"}
                    />
                <OurExpertiseCard
                    icon={themeState === "light" ? QualityEngineeringIcon : QualityEngineeringDarkIcon}
                    title={"Quality Engineering"}
                    />
                <OurExpertiseCard
                    icon={themeState === "light" ? DataScienceIcon : DataScienceDarkIcon}
                    title={"Data Science"}
                    />
                <OurExpertiseCard
                    icon={themeState === "light" ? CybersecurityIcon : CybersecurityDarkIcon}
                    title={"Cybersecurity"}
                />
            </div>
        </div>
    );
}