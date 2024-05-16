"use client"

import { ThemeContext } from "../ThemeProvider";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import FacebookIcon from "icon/facebookIcon.svg";
import LinkdinIcon from "icon/linkdinIcon.svg";
import InstagramIcon from "icon/instagramIcon.svg";
import YoutubeIcon from "icon/youtubeIcon.svg";

import FacebookDarkIcon from "icon/gradientFacebookIcon.svg";
import LinkdinDarkIcon from "icon/gradientLinkdnIcon.svg";
import InstagramDarkIcon from "icon/gradientInstagramIcon.svg";
import YoutubedarkIcon from "icon/gradientYoutubeIcon.svg";


export default function FootSocialMedia() {
    const { theme, setTheme } = useContext(ThemeContext)
    const [themeState, setThemeState] = useState("light")

    useEffect(() => {
        setThemeState(theme);
    }, [theme]);

    return (
        <div className="flex gap-3 md:justify-center">
            {themeState === "light" ? (
                <Image
                    src={FacebookIcon}
                    alt="facebookIcon"
                    width={32}
                    height={32}
                />
            ) : (
                <Image
                    src={FacebookDarkIcon}
                    alt="facebookIcon"
                    width={32}
                    height={32}
                />
            )}

            {themeState === "light" ? (
                <Image
                    src={LinkdinIcon}
                    alt="linkdinIcon"
                    width={32}
                    height={32}
                />
            ) : (
                <Image
                    src={LinkdinDarkIcon}
                    alt="facebookIcon"
                    width={32}
                    height={32}
                />
            )}

            {themeState === "light" ? (
                <Image
                    src={InstagramIcon}
                    alt="instagramIcon"
                    width={32}
                    height={32}
                />
            ) : (
                <Image
                    src={InstagramDarkIcon}
                    alt="facebookIcon"
                    width={32}
                    height={32}
                />
            )}
            {themeState === "light" ? (
                <Image
                    src={YoutubeIcon}
                    alt="youtubeIcon"
                    width={32}
                    height={32}
                />
            ) : (
                <Image
                    src={YoutubedarkIcon}
                    alt="facebookIcon"
                    width={32}
                    height={32}
                />
            )}
        </div>
    );
}