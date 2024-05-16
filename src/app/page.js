import Layout from "@/components/molecules/Layout";
import AboutUs from "@/components/molecules/home/AboutUs";
import CaseStudy from "@/components/molecules/home/CaseStudy";
import ContactUsSection from "@/components/molecules/home/ContactUsSection";
import OurClients from "@/components/molecules/home/OurClients";
import OurExpertise from "@/components/molecules/home/OurExpertise";
import Testimonial from "@/components/molecules/home/Testimonial";
import Image from "next/image";

import FootBg from "icon/footerBG.svg"
import TestimoniBg from "icon/testimonialBg.svg"
import TrapBgImage from "icon/mainTrapbg.svg"

const Home = () => {
  return (
    <main className="bg-[#cde8fb] relative flex flex-col justify-center 
    items-center py-[30px] overflow-hidden  dark:bg-black"
    // style={{ background: 'linear-gradient(to right, #5BF7E8, #DEA6EF, #0C3CF7)'}}
    >
      <div className="trapBgImage">
        <Image
          src={TrapBgImage}
          alt="trapBgImage"
          className="w-[100%] dark:opacity-[0.4]"
        />
      </div>
      <Layout className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className=" w-[100%] px-5 flex flex-col gap-5 mt-[30px] md:mt-[50px] sm:w-[80%] sm:mt-0 sm:gap-10 md:gap-28 md:w-[70%] md:m-auto">
          <div style={{ zIndex: "22" }}>
            <h1 className="w-[100%] text-[#000000] font-[700] text-wrap text-[20px] sm:w-[70%] sm:text-[30px] md:w-[60%] md:text-[50px] dark:text-white ">Fostering growth through innovative</h1>
            <span className="md:text-[50px] text-[#1565C0] font-[700]">
              <span className="text-[#B40FE7] md:text-[50px] font-[600]">{'['}</span>IT Solutions<span className="text-[#B40FE7] md:text-[50px] font-[600]">{']'}<span className="text-[#1565C0] md:text-[50px] font-[700]">{';'}</span></span>
            </span>
          </div>
          <div className="flex justify-start sm:pl-[15%]" style={{ zIndex: "22" }} id="service">
            <p className="w-[100%] text-wrap text-[12px] tracking-[1.5px] sm:text-[20px] md:w-[100%] md:text-[20px] text-[#000000] font-[500] dark:text-white">We are converting ideas into reality, transforming business into Digital Powerhouses, and Scaling Products to millions of users!</p>
          </div>
        </div>

        <OurExpertise />
        <OurClients />
        <CaseStudy />
        <AboutUs />
        <div className="testimoniBGImg">
          <Image
            src={TestimoniBg}
            alt="TestimoniBg"
            className="w-[100%]"
          />
        </div>
        <div className="testimonialsBG">
          <Testimonial />
        </div>
        <div className="footerBGImg">
          <Image
            src={FootBg}
            alt="footerBf"
          />
        </div>
        <ContactUsSection />

        {/* <div className="mb-32 grid text-center  lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div> */}

      </Layout>

    </main>
  );
}

export default Home;