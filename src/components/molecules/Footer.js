import Image from "next/image";

import LocationIcon from "icon/locationBlackIcon.svg";
import EmailIcon from "icon/emailIcon.svg";
import PhoneIcon from "icon/phoneIcon.svg";
import FacebookIcon from "icon/facebookIcon.svg";
import LinkdinIcon from "icon/linkdinIcon.svg";
import InstagramIcon from "icon/instagramIcon.svg";
import YoutubeIcon from "icon/youtubeIcon.svg";


import BytiveBlackLogo from "image/Vector-removebg-preview (1).png";
import FootSocialMedia from "./home/FootSocialMedia";

export default function Footer() {

    return (
        <div className="flex flex-col mx-[25px] md:mx-[25px] gap-6 footerBgImg">
            <div className='md:w-[40%] flex md:justify-center'>
                <Image
                    src={BytiveBlackLogo}
                    width={120}
                    height={120}
                    alt='bytiveLogo'
                    className='dark:brightness-[160]'
                />
            </div>
            <div className=" relative gap-6 sm:pl-[250px] grid text-center sm:w-full sm:grid-cols-4 sm:text-left">
                <span className=" absolute left-[63px] top-[-85px] sm:text-[190px] font-[500] text-transparent bg-gradient-to-r bg-clip-text from-[#47A2DF] to-[#B40FE7]" style={{ backgroundImage: 'linear-gradient(167.14deg, #47A2DF -24.69%, #B40FE7 174.64%)' }}>{'{'}</span>
                <ul className="flex flex-col items-start gap-3 text-[14px] font-[400] dark:text-white">
                    <li className="text-[#000000] sm:text-[18px] font-[700] dark:text-white">Company</li>
                    <l1>About Us</l1>
                    <l1>Blog</l1>
                    <l1>Career</l1>
                    <l1>Hire top talent</l1>
                    <l1>Contact Us</l1>
                </ul>
                <ul className="flex flex-col items-start gap-3 text-[14px] font-[400] dark:text-white">
                    <li className="text-[#000000] sm:text-[18px] font-[700] dark:text-white">Services</li>
                    <l1>Project Management</l1>
                    <l1>UI/UX Design</l1>
                    <l1>Mobile App Development</l1>
                    <l1>Web Development</l1>
                </ul>
                <ul className="flex flex-col items-start gap-3 text-[14px] font-[400] dark:text-white">
                    <li className="text-[#000000] sm:text-[18px] font-[700] dark:text-white">Address</li>
                    <l1 className="flex gap-3 text-left items-start">
                        <Image
                            src={LocationIcon}
                            alt="locationIcon"
                            width={32}
                            height={32}
                            className="dark:filter dark:brightness-0 dark:invert dark:grayscale-100"
                        />
                        <p>Unit 602, tower-4, assotech business cresterra, noida,uttar pradesh</p>
                    </l1>
                    <l1 className="flex gap-3 items-start">
                        <Image
                            src={EmailIcon}
                            alt="emailIcon"
                            width={20}
                            height={20}
                            className="dark:filter dark:brightness-0 dark:invert dark:grayscale-100"
                        />
                        <p>hello@bytive.in</p>
                    </l1>
                    <l1 className="flex gap-3 items-start">
                        <Image
                            src={PhoneIcon}
                            alt="phoneIcon"
                            width={20}
                            height={20}
                            className="dark:filter dark:brightness-0 dark:invert dark:grayscale-100"
                        />
                        <p>+91 7684592145</p>
                    </l1>
                </ul>
            </div>
            <FootSocialMedia />
            <div className="w-full opacity-[0.8] justify-center sm:m-auto sm:w-[86%] min-w-[70%]
                items-center sm:shadow-md bg-[#e5f2fd] px-7 py-4 left-0 top-0 flex from-zinc-200
                backdrop-blur-2xl dark:bg-[#222222A6] dark:border-neutral-800 dark:from-inherit
                rounded-[40px] border"
            >
                <h1 className="text-[#000000] font-[400] sm:text-[16px] dark:text-white"> © All rights reserved, 2024</h1>
            </div>
        </div>
    );
}