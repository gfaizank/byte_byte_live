"use client"
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';
import Link from 'next/link';
import Image from 'next/image';

import ThemeToggle from './ThemeToggle';
import MenuDrawer from './drawer/MenuDrawer';

// import BytiveBlackLogo from "image/Vector-removebg-preview (1).png";
// import BytiveBlackLogo from "icon/bytiveDrawerLogo.svg";
import BytiveBlackLogo from "image/blackLogo1-removeBg.png";
// import BytiveBlackLogo from "icon/bytiveBlackLogo1.svg";
import BytiveWhiteLogo from "icon/whiteLogo1.svg";
import HeaderMenu from "icon/stairsMenu.svg";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [themeState, setThemeState] = useState("light")
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setThemeState(theme);
    }, [theme]);

    const menuDrawerOpen = () => {
        setMenuOpen(true);
    };
    const menuDrawerClose = () => {
        setMenuOpen(false);
    };

    return (
        <div className=" relative w-full gap-[55px] items-center justify-between font-mono text-sm md:w-[70%] md:m-auto lg:flex headerContainer">
            <div className="fixed z-[30] top-0 md:top-5 w-[100%] md:w-[70%] m-auto items-center justify-between sm:shadow-md
                  bg-[#e5f2fd] px-7 py-3 flex from-zinc-200 backdrop-blur-2xl
                 dark:bg-[#222222A6] dark:border-neutral-800 dark:from-inherit lg:rounded-[40px] lg:border dark:shadow-[0 2px 10px rgba(25,25,25,0.3)]">
                <div className='md:w-[30%]'>
                    {themeState === "light" ? (
                        <Image
                            src={BytiveBlackLogo}
                            width={170}
                            height={170}
                            alt='bytiveLogo'
                        />
                    ) : (
                        <Image
                            src={BytiveWhiteLogo}
                            width={170}
                            height={170}
                            alt='bytiveWhiteLogo'
                        />
                    )}
                </div>
                <div className='sm:w-[70%] flex justify-end items-center sm:justify-end'>
                    <ul className='gap-5 text-[#000000] text-[16px] font-[700] hidden md:flex dark:text-white'>
                        <li>Home</li>
                        <li>
                            <Link href="#service">
                                Services
                            </Link>
                        </li>
                        <li>projects</li>
                        <Link href="/aboutUs">
                            About Us
                        </Link>
                        <li>blogs</li>
                        <li>contact</li>
                    </ul>
                    <div className='sm:pl-7 cursor-pointer' onClick={menuDrawerOpen}>
                        <Image
                            src={HeaderMenu}
                            // width={30}
                            // height={30}
                            alt='menu'
                            className="dark:filter dark:brightness-0 dark:invert dark:grayscale-100 cardOnHoverIcon"
                        />
                    </div>
                </div>
            </div>
            <div className='fixed z-[22] right-[16%] top-[20px] md:absolute md:right-[-12%] md:top-[10px] md:block'>
                <ThemeToggle />
            </div>

            <div className='dark:bg-black '>
                {menuOpen &&
                    <MenuDrawer
                        isOpen={menuOpen}
                        onClose={menuDrawerClose}
                    />
                }
            </div>
        </div>
    );
}