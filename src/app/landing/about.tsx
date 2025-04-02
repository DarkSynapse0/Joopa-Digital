"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          {/* Image Section - Hidden on Mobile */}
          <div className="w-full justify-center items-start gap-6 sm:grid-cols-2 grid-cols-1 lg:order-first order-last hidden sm:grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex"
            >
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="About Us Image"
                width={300}
                height={200}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:ml-0 ml-auto rounded-xl object-cover"
            >
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="About Us Image"
                width={300}
                height={200}
              />
            </motion.div>
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
          >
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold leading-normal lg:text-start text-center">
                  Empowering Each Other to Succeed
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Joopa Digital is a cutting-edge digital solutions provider specializing in social media boosting, web development, home tuition services, graphic design, and more. With a commitment to innovation and excellence, we empower businesses and individuals with tailored digital strategies that drive growth and engagement. Our team of experts leverages the latest technology and creative insights to deliver high-quality, results-driven solutions. Whether you're looking to enhance your online presence, develop a professional website, or access personalized tutoring, Joopa Digital is your trusted partner in the digital world.
                </p>
              </div>

              {/* Stats */}
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                {[
                  { label: "Years of Experience", value: "10+" },
                  { label: "Successful Projects", value: "10+" },
                  { label: "Happy Clients", value: "50+" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex-col justify-start items-start inline-flex"
                  >
                    <h3 className="text-gray-900 text-4xl font-bold leading-normal">
                      {stat.value}
                    </h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      {stat.label}
                    </h6>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9"
            >
              <a
                href="#"
                className="relative flex h-12 text-white w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-orange-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  Read More
                </span>
              </a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
