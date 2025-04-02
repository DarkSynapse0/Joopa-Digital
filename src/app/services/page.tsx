"use client";
import {
  TrendingUp,
  Code,
  Paintbrush,
  BookOpen,
  Search,
  Edit,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Social Media Boosting",
    description:
      "Grow your online presence with targeted engagement and reach strategies.",
    icon: TrendingUp,
  },
  {
    title: "Web Development",
    description:
      "Custom websites designed to suit your business needs and goals.",
    icon: Code,
  },
  {
    title: "Graphic Design",
    description:
      "Eye-catching visuals and branding solutions tailored for your business.",
    icon: Paintbrush,
  },
  {
    title: "Home Tuition",
    description:
      "Expert tutors to help students excel in their academic journey.",
    icon: BookOpen,
  },
  {
    title: "SEO & Marketing",
    description:
      "Enhance your visibility with data-driven SEO and marketing strategies.",
    icon: Search,
  },
  {
    title: "Content Creation",
    description:
      "Engaging content that drives traffic and boosts brand awareness.",
    icon: Edit,
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="container space-y-6 py-8 mx-auto md:py-12 lg:py-24"
    >
      <div className="mt-30 mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <motion.h2
          className=" text-black font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Web Hosting Companies Features
        </motion.h2>
        <motion.p
          className="max-w-[85%] leading-normal text-black sm:text-lg sm:leading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Discover the amazing features offered by web hosting companies to
          enhance your online presence.
        </motion.p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={index}
            className="relative m-5 overflow-hidden rounded-lg border border-orange-600 bg-white p-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icon size={48} strokeWidth={2} className="text-black" />
              <div className="space-y-2">
                <h3 className="text-orange-600 font-bold">{title}</h3>
                <p className="text-sm text-black">{description}</p>
                <div className="action">
                  {/* <a href="/services/features">
                    <ArrowRight
                      size={24}
                      strokeWidth={2}
                      className="text-black"
                    />
                  </a> */}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
