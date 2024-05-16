"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";

import SightsQuotation from "icon/ourSightsQuotation.svg"

export default function grAboutUsSlider() {

    const aboutData = [
        {
            title: "Setting Our Sights",
            subtitle: "Visionary Goals and Aspirations",
            description: "a passion for crafting outstanding software solutions that stand out for their clean code, agile methodologies, and exceptional user experiences.",
            bgImg: "/icons/OurSightsBG.svg"
        },
        {
            title: "Mission Possible",
            subtitle: "Pursuing Our Purpose with Passion",
            description: "a passion for crafting outstanding software solutions that stand out for their clean code, agile methodologies, and exceptional user experiences.",
            bgImg: "/icons/missionPosibleBG.svg"
        },
    ];

    // Repeat the logoData array indefinitely
    const repeatedAboutData = Array.from({ length: 10 }, () => aboutData).flat();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='aboutUsSlider relative z-[10]'>
            <div className='bg-white h-[200px] absolute top-[20%] left-[3%] md:w-[95%]' />
            <div className='px-0 md:px-[50px]'
            // style={{ width: '642px', maxWidth: '700px', margin: '0 auto' }}
            >
                <Carousel
                    responsive={responsive}
                    additionalTransfrom={0}
                    arrows={true}
                    autoPlay={false}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=''
                    containerClass='container-with-dots'
                    dotListClass=''
                    draggable
                    focusOnSelect={false}
                    infinite={true}
                    transitionDuration={500}
                    itemClass='carousel-item'
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=''
                    slidesToSlide={1}
                    swipeable
                >
                    
                    {repeatedAboutData?.map((item, index) => (
                        <div key={index} className=' relative flex flex-col border-[1px] text-left border-white rounded-tl-[9px] rounded-tr-[9px] w-[100%] md:w-[95%] m-auto h-[100%] dark:border-transparent'>
                            <div className=' z-10 pt-[87px] pb-[10px] px-[20px] flex flex-col gap-3 OurSightsBG' style={{ backgroundImage: `url(${item.bgImg})` }}>
                                <h1 className='text-[#ffffff] tex-[20px] font-[700] sm:w-[40%]'>{item?.title}</h1>
                                <h2 className='text-[#ffffff] tex-[14px] font-[500] sm:w-[70%]'>{item?.subtitle}</h2>
                            </div>
                            <div className='bg-white'>
                                <div className='px-[20px] py-[10px] flex flex-col'>
                                    <p className='text-[#000000] tex-[12px] font-[500]'>{item?.description}</p>
                                    <button>
                                        <p className='text-[#3155FF] tex-[12px] font-[500] text-left'>Read more</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <Image
                        src={SightsQuotation}
                        alt="SightsQuotation"
                        className=' w-[85px] h-auto absolute top-[-13px] left-[-35px] md:top-[0px] md:left-[-13px]'
                    />
            </div>

        </div>
    );
}
