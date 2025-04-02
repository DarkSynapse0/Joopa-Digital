"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 mt-30 px-4 ">
      <motion.p
        className="font-normal text-sm leading-3 text-orange-700 dark:text-orange-500 hover:text-orange-800 cursor-pointer pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About
      </motion.p>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <motion.h2
            className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-black leading-9"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            We are here to make great design accessible and delightful for
            everyone
          </motion.h2>
          <p className="font-normal text-base leading-6 text-black dark:text-black mt-6">
            Joopa Digital is a forward-thinking digital solutions provider
            dedicated to helping businesses and individuals thrive in the
            digital era. We offer a wide range of services, including social
            media boosting, web development, home tuition, graphic design, and
            more. Our mission is to bridge the gap between technology and
            creativity, delivering innovative solutions that enhance online
            visibility, streamline operations, and drive meaningful engagement.
            With a team of skilled professionals, we ensure every project is
            tailored to meet the unique needs of our clients, helping them
            achieve their goals efficiently and effectively.
          </p>
          <p className="font-normal text-base leading-6 text-black dark:text-black mt-6">
            At Joopa Digital, we believe in the power of digital transformation.
            Whether you're a business looking to establish a strong online
            presence, an individual seeking expert tutoring, or a brand aiming
            to stand out in the competitive market, we have the expertise to
            bring your vision to life. Our commitment to quality, customer
            satisfaction, and cutting-edge strategies sets us apart as a trusted
            partner in the digital landscape. With Joopa Digital, you get more
            than just a service—you gain a long-term ally dedicated to your
            success.
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
            alt="people discussing on board"
            width={500}
            height={700}
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
            alt="people discussing on board"
            width={500}
            height={700}
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
            alt="people discussing on board"
            width={500}
            height={700}
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
        <div className="w-full lg:w-6/12">
          <motion.h2
            className="font-bold mt-5 lg:text-4xl text-3xl lg:leading-9 leading-7 text-black dark:text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <p className="font-normal text-base leading-6 text-black dark:text-black mt-3 w-full ">
            Our mission is to empower businesses and individuals with innovative
            digital solutions that enhance online presence, improve engagement,
            and drive growth. We are committed to delivering high-quality
            services in social media boosting, web development, home tuition,
            and graphic design, ensuring our clients achieve their goals
            efficiently and effectively.
          </p> <br />
          <motion.h2
            className="font-bold mt-5 lg:text-4xl text-3xl lg:leading-9 leading-7 text-black dark:text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Vision
          </motion.h2>
          <p className="font-normal text-base leading-6 text-black dark:text-black mt-3 w-full ">
            Our vision is to become a leading digital solutions provider,
            recognized for our creativity, technological expertise, and
            customer-centric approach. We aim to revolutionize the digital
            landscape by continuously evolving, adapting to new trends, and
            setting benchmarks for excellence in the industry.
          </p> <br />
          <motion.h2
            className="font-bold mt-5 lg:text-4xl text-3xl lg:leading-9 leading-7 text-black dark:text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Objectives
          </motion.h2>
          <p className="font-normal text-base leading-6 text-black dark:text-black mt-3 w-full ">
            <b className="text-orange-500">Enhance Digital Presence : </b>Help businesses and individuals
            establish a strong and impactful online identity. <br />

            <b className="text-orange-500">Deliver High-Quality Services : </b> Provide top-notch web development,
            social media management, and design solutions. <br />
            
            <b className="text-orange-500">Customer Satisfaction : </b>  Ensure personalized strategies that cater to the unique needs of
            each client. <br />
            
            <b className="text-orange-500">Promote Digital Education : </b>  Offer home tuition services
            that bridge learning gaps through expert guidance. <br />
            
            <b className="text-orange-500">Stay Ahead of Trends : </b> Continuously innovate and adapt to the latest digital
            advancements to provide cutting-edge solutions.
          </p>
        </div>

        <div className="w-full lg:w-6/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
            <div className="flex p-4 shadow-md rounded">
              <div className="mr-6">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg4.svg"
                  alt="team card"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-black dark:text-black">
                  Team
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-black dark:text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content...
                </p>
              </div>
            </div>
            <div className="flex p-4 shadow-md rounded">
              <div className="mr-6">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg5.svg"
                  alt="board card"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-black dark:text-black">
                  Board
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-black dark:text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content...
                </p>
              </div>
            </div>
            <div className="flex p-4 shadow-md rounded">
              <div className="mr-6">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg6.svg"
                  alt="press card"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-black dark:text-black">
                  Press
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-black dark:text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
