"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";

import HealthYugLogo from "icon/healthYugLogo.svg";
import FriendVerfierLogo from "icon/friendVerfierLogo.svg";
import MyClinicLogo from "icon/myClinicLogo.svg";
import CognitusLogo from "icon/cognitusLogo.svg";
import PienaLogo from "icon/pienaLogo.svg";

export default function OurClientsSlider() {

    const logoData = [
        { img: HealthYugLogo },
        { img: FriendVerfierLogo },
        { img: MyClinicLogo },
        { img: CognitusLogo },
        { img: PienaLogo },
        { img: HealthYugLogo },
        { img: FriendVerfierLogo },
        { img: MyClinicLogo },
        { img: CognitusLogo },
        { img: PienaLogo },
        
        { img: HealthYugLogo },
        { img: FriendVerfierLogo },
        { img: MyClinicLogo },
        { img: CognitusLogo },
        { img: PienaLogo },
        { img: HealthYugLogo },
        { img: FriendVerfierLogo },
        { img: MyClinicLogo },
        { img: CognitusLogo },
        { img: PienaLogo },
    ];

// Repeat the logoData array indefinitely
const repeatedLogoData = Array.from({ length: 10 }, () => logoData).flat();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='ourClientSlider'>
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                <Carousel
                    responsive={responsive}
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    centerMode={false}
                    className=''
                    containerClass='container-with-dots'
                    dotListClass=''
                    draggable
                    focusOnSelect={false}
                    infinite={true}
                    customTransition="all 10s ease"
                    transitionDuration={3000}
                    itemClass='carousel-item'
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    rewind={true}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=''
                    // slidesToSlide={1}
                    swipeable
                >
                    {repeatedLogoData?.map((item, index) => (
                        <div key={index}>
                            <Image
                                src={item.img}
                                alt="HealthYugLogo"
                                width={200}
                                height={200}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

        </div>
    );
}
