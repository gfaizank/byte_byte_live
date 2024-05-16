"use client"
import { Fragment, useContext, useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Image from "next/image";
import { ThemeContext } from "../ThemeProvider";

import DrawerCloseIcon from "icon/drawerCloseIcon.svg";
import DrawerDarkCloseIcon from "icon/drawerDarkCloseIcon.svg";
import BytiveLogo from "icon/bytiveDrawerLogo.svg";
import BytiveWhiteLogo from "icon/whiteLogo1.svg";
import AboutIcon from "icon/aboutIcon.svg";
import AboutDarkIcon from "icon/aboutDarkIcon.svg";
import CareerIcon from "icon/careerIcon.svg";
import CareerDarkIcon from "icon/careerDarkIcon.svg";
import ContactUsIcon from "icon/contactUsIcon.svg";
import ContactUsDarkIcon from "icon/contactUsDarkIcon.svg";
import CaseStudyIcon from "icon/caseStudyIcon.svg";
import CaseStudyDarkIcon from "icon/caseStudyDarkIcon.svg";
import HireTopIcon from "icon/hireTopIcon.svg";
import HireTopDarkIcon from "icon/hireTopdarkIcon.svg";
import LocationIcon from "icon/locationBlackIcon.svg";
import EmailIcon from "icon/emailIcon.svg";
import PhoneIcon from "icon/phoneIcon.svg";
import FacebookIcon from "icon/gradientFacebookIcon.svg";
import LinkdinIcon from "icon/gradientLinkdnIcon.svg";
import InstagramIcon from "icon/gradientInstagramIcon.svg";
import YoutubeIcon from "icon/gradientYoutubeIcon.svg";

function MenuDrawer({ isOpen, onClose }) {
    const { theme } = useContext(ThemeContext);

    const handleClose = () => {
        onClose();
    };

    const [state, setState] = useState({
        // top: false,
        // left: false,
        // bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="drawerSection px-3 dark:bg-black py-5"
        >
            <div className="flex justify-between w-full ">
                {theme === "light" ? (
                    <Image
                        src={BytiveLogo}
                        alt='BytiveLogo'
                    />
                ) : (
                    <Image
                        src={BytiveWhiteLogo}
                        alt='bytiveWhiteLogo'
                    />
                )}

                {theme === "light" ? (
                    <Image
                        src={DrawerCloseIcon}
                        alt="closeIcon"
                        onClick={handleClose}
                        className="w-[30px]"
                    />
                ) : (
                    <Image
                        src={DrawerDarkCloseIcon}
                        alt="closeIcon"
                        onClick={handleClose}
                        className="w-[30px]"
                    />
                )}
            </div>
            <div className="flex flex-col gap-6">
                <ul className="flex flex-col gap-3">
                    <li className="flex gap-2">
                        {theme === "light" ? (
                            <Image
                                src={AboutIcon}
                                width={22}
                                height={22}
                                alt="aboutIcon"
                            />
                        ) : (
                            <Image
                                src={AboutDarkIcon}
                                width={22}
                                height={22}
                                alt="aboutIcon"
                            />
                        )}
                        <p className="text-[#000000] font-[500] sm:text-[20px] dark:text-white">
                            <span className="text-[#35C85E] font-[500] sm:text-[20px]">{'{'}</span>
                            about us
                            <span className="text-[#35C85E] font-[500] sm:text-[20px]">{'}'}</span>
                        </p>
                    </li>
                    <li className="flex gap-2">
                        {theme === "light" ? (
                            <Image
                                src={CareerIcon}
                                width={22}
                                height={22}
                                alt="careerIcon"
                            />
                        ) : (
                            <Image
                                src={CareerDarkIcon}
                                width={22}
                                height={22}
                                alt="careerIcon"
                            />
                        )}
                        <p className="text-[#000000] font-[500] sm:text-[20px] dark:text-white">
                            <span className="text-[#B40FE7] font-[500] sm:text-[20px]">{'{'}</span>
                            Career
                            <span className="text-[#B40FE7] font-[500] sm:text-[20px]">{'}'}</span>
                        </p>
                    </li>
                    <li className="flex gap-2">
                        {theme === "light" ? (
                            <Image
                                src={ContactUsIcon}
                                width={22}
                                height={22}
                                alt="contactUsIcon"
                            />
                        ) : (
                            <Image
                                src={ContactUsDarkIcon}
                                width={22}
                                height={22}
                                alt="contactUsIcon"
                            />
                        )}
                        <p className="text-[#000000] font-[500] sm:text-[20px] dark:text-white">
                            <span className="text-[#3155FF] font-[500] sm:text-[20px]">{'{'}</span>
                            Contact us
                            <span className="text-[#3155FF] font-[500] sm:text-[20px]">{'}'}</span>
                        </p>
                    </li>
                    <li className="flex gap-2">
                        {theme === "light" ? (
                            <Image
                                src={CaseStudyIcon}
                                width={22}
                                height={22}
                                alt="caseStudyIcon"
                            />
                        ) : (
                            <Image
                                src={CaseStudyDarkIcon}
                                width={22}
                                height={22}
                                alt="caseStudyIcon"
                            />
                        )}
                        <p className="text-[#000000] font-[500] sm:text-[20px] dark:text-white">
                            <span className="text-[#E4B610] font-[500] sm:text-[20px]">{'{'}</span>
                            Case study
                            <span className="text-[#E4B610] font-[500] sm:text-[20px]">{'}'}</span>
                        </p>
                    </li>
                    <li className="flex gap-2">
                        {theme === "light" ? (
                            <Image
                                src={HireTopIcon}
                                width={22}
                                height={22}
                                alt="hireTopIcon"
                            />
                        ) : (
                            <Image
                                src={HireTopDarkIcon}
                                width={22}
                                height={22}
                                alt="hireTopIcon"
                            />
                        )}
                        <p className="text-[#000000] font-[500] sm:text-[20px] dark:text-white">
                            <span className="text-[#00ACE0] font-[500] sm:text-[20px]">{'{'}</span>
                            Hire top talent
                            <span className="text-[#00ACE0] font-[500] sm:text-[20px]">{'}'}</span>
                        </p>
                    </li>
                </ul>

                <ul className="flex flex-col gap-3 text-[14px] font-[400] ">
                    <l1 className="flex gap-3 items-start">
                        <Image
                            src={LocationIcon}
                            alt="locationIcon"
                            width={32}
                            height={32}
                            className="dark:filter dark:brightness-0 dark:invert dark:grayscale-100"
                        />
                        <p className="text-[#000000] sm:text-[14px] font-[400] dark:text-white">Unit 602, tower-4, assotech business cresterra, noida,uttar pradesh</p>
                    </l1>
                    <l1 className="flex gap-3 items-start">
                        <Image
                            src={EmailIcon}
                            alt="emailIcon"
                            width={20}
                            height={20}
                            className="dark:filter dark:brightness-0 dark:invert dark:grayscale-100"
                        />
                        <p className="text-[#000000] sm:text-[14px] font-[400] dark:text-white">hello@bytive.in</p>
                    </l1>
                    <l1 className="flex gap-3 items-start">
                        <Image
                            src={PhoneIcon}
                            alt="phoneIcon"
                            width={20}
                            height={20}
                            className="dark:filter dark:brightness-0 dark:invert dark:grayscale-100"
                        />
                        <p className="text-[#000000] sm:text-[14px] font-[400] dark:text-white">+91 7684592145</p>
                    </l1>
                </ul>

                <div className="flex gap-3">
                    <div>
                        <Image
                            src={FacebookIcon}
                            alt="facebookIcon"
                            width={32}
                            height={32}
                        />
                    </div>
                    <div>
                        <Image
                            src={LinkdinIcon}
                            alt="linkdinIcon"
                            width={32}
                            height={32}
                        />
                    </div>
                    <div>
                        <Image
                            src={InstagramIcon}
                            alt="instagramIcon"
                            width={32}
                            height={32}
                        />
                    </div>
                    <div>
                        <Image
                            src={YoutubeIcon}
                            alt="youtubeIcon"
                            width={32}
                            height={32}
                        />
                    </div>

                </div>
            </div>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={isOpen}
                        onClose={onClose}
                        className="bg-[#6F6F6F80]"
                        PaperProps={{
                            className: "w-full md:w-[370px] bg-white dark:bg-black",
                            sx: {
                                // backgroundColor:"black",
                                //   height: 'calc(100% - 64px)',
                                //   bottom: 64,
                            },
                        }}
                    >
                        {list(anchor)}
                    </Drawer>
                </Fragment>
            ))}
        </div>
    );
}

export default MenuDrawer;
