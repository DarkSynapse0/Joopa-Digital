"use client";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      title: "Social Media Boost",
      description:
        "Increase engagement, grow your brand, and reach your ideal audience. We provide strategic social media solutions to maximize visibility, interaction, and organic growth.",
      iconColor: "text-green-500",
      iconPath:
        "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
    },
    {
      title: "Digital Marketing",
      description:
        "Targeted strategies for business growth. We optimize online presence through SEO, ads, and content marketing, driving leads and maximizing conversions effectively.",
      iconColor: "text-blue-600",
      iconPath:
        "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      title: "Web Development",
      description:
        "The best CSS framework out there allows you to easily customize the theme and components any way you like.lows you to easily customize the theme and components any way you like.",
      iconColor: "text-red-500",
      iconPath:
        "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-widest text-blue-600 dark:text-gray-500 font-bold uppercase"
          >
            Expert services that drive results, one click at a time.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-3xl font-bold leading-tight text-white dark:text-white-50 sm:text-4xl lg:text-5xl"
          >
            Smart Strategies for Business Growth
          </motion.h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="flex items-start"
              >
                <svg
                  className={`flex-shrink-0 ${feature.iconColor} w-9 h-9`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d={feature.iconPath}
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-white dark:text-white-50">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-400 dark:text-white-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-3"
          >
            <img
              className="w-full rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dashboard screenshot"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
