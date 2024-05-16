"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";

import QuotationMark from "icon/testimonialQuotationsMark.svg";
import ProfileImage from "icon/testimonialProfileImg.svg";

export default function TestimonialSlider() {

    const testimonialData = [
        {
            comments: "Efficient, reliable, and proactive – bytive has transformed our IT infrastructure. Their tailored solutions and proactive support have streamlined our operations, ensuring seamless functionality",
            name: "Nikhil kardam",
            profileImage: ProfileImage,
        },
        {
            comments: "And proactive support have streamlined our operations, ensuring seamless functionality",
            name: "Nikhil kardam",
            profileImage: ProfileImage,
        },
        {
            comments: "And proactive support have streamlined our operations, ensuring seamless functionality",
            name: "Nikhil kardam",
            profileImage: ProfileImage,
        },
        {
            comments: "And proactive support have streamlined our operations, ensuring seamless functionality",
            name: "Nikhil kardam",
            profileImage: ProfileImage,
        },
        {
            comments: "And proactive support have streamlined our operations, ensuring seamless functionality",
            name: "Nikhil kardam",
            profileImage: ProfileImage,
        },
    ];

    // Repeat the logoData array indefinitely
    // const repeatedTestimonialData = Array.from({ length: 5 }, () => testimonialData).flat();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
        <div className='TestimonialSlider w-[100%] z-[10] mt-3 md:mt-0'>
            <div className=' w-[80%]'
                style={{ maxWidth: '1500px', margin: '0 auto' }}
            >
                <Carousel
                    responsive={responsive}
                    // additionalTransfrom={0}
                    arrows={false}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=''
                    // containerClass='container-with-dots'
                    // dotListClass=''
                    draggable
                    focusOnSelect={false}
                    infinite={true}
                    transitionDuration={500}
                    // itemClass='carousel-item'
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    rewind={false}
                    // rewindWithAnimation={false}
                    rtl={false}
                    // shouldResetAutoplay
                    showDots={true}
                    sliderClass=''
                    slidesToSlide={1}
                    swipeable

                    ssr={true} // means to render carousel on server-side.
                    // customTransition="all .5"
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {testimonialData?.map((item, index) => (
                        <div key={index} className='flex flex-col text-left gap-2 md:w-[70%] m-auto'>
                            <div className='flex pt-[20px] gap-3 items-start'>
                                <Image
                                    src={QuotationMark}
                                    alt="quotationMark"
                                    className=' w-[55%] h-auto relative top-[-13px]'
                                />
                                <p className='text-[#000000] text-[14px] font-4300] dark:text-white'>{item.comments}</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <Image
                                    src={item.profileImage}
                                    alt="ProfileImage"
                                    width={60}
                                    height={60}
                                    className='border-[1px] rounded-[35px] border-white hover:border-[#B40FE7]'
                                />
                                <p className='text-[#000000] text-[16px] font-[600] dark:text-white'>{item.name}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

        </div>
    );
}
