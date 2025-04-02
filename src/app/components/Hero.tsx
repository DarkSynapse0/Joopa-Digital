"use client";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subTitle: string;
  CTA1: string;
  CTA2: string;
  img: string;
}

const Hero = ({ title, subTitle, CTA1, CTA2, img }: HeroSectionProps) => {
  return (
    <section className="pt-35 bg-gray-50 sm:pt-35 lg:pt-35">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight"
        >
          {title}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter"
        >
          {subTitle}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-orange-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white dark:text-dark">
                Get Started
              </span>
            </a>
            <a
              href="#"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-orange-500/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-orange-500 dark:text-white">
                More about
              </span>
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-white relative mx-auto p-5 mt-4 md:mt-8 lg:max-w-4xl lg:mx-auto"
      >
        <img className="rounded-4xl" src={img} alt="Chatbot" />
      </motion.div>
    </section>
  );
};

export default Hero;
