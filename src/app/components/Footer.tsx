"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const companyDescription = [
    "Our commitment to quality, customer satisfaction, and cutting-edge strategies sets us apart as a trusted partner in the digital landscape. With Joopa Digital, you get more than just a service—you gain a long-term ally dedicated to your success.",
  ];

  const contacts = [
    { label: "Phone : ", value: "9768866299", href: "tel:9768866299" },
    {
      label: "Email : ",
      value: "joopadigital@gmail.com",
      href: "mailto:joopadigital@gmail.com",
    },
    {
      label: "Address : ",
      value: "Tillotama, Shankhanagar, Rupandehi",
      href: "https://www.google.com/maps",
    },
  ];

  const footerLinks = [
    { name: "F.A.Q", href: "/faq"},
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms&condition" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 pt-16 bg-gray-800 shadow-md lg:rounded-2xl lg:mb-10 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8"
    >
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2">
          <Link
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              JOOPA DIGITAL
            </span>
          </Link>
          <div className="mt-6 lg:max-w-sm">
            {companyDescription.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-sm text-white mt-4"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          {contacts.map(({ label, value, href }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex"
            >
              <p className="mr-1 text-white">{label}</p>
              <Link
                href={href}
                aria-label={label}
                title={label}
                className="transition-colors duration-300 text-white hover:underline"
              >
                {value}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} JOOPA DIGITAL. All rights reserved.
        </p>
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row"
        >
          {footerLinks.map(({ name, href }, index) => (
            <li key={index}>
              <Link
                href={href}
                className="text-sm text-white transition-colors duration-300 hover:underline"
              >
                {name}
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.footer>
  );
};

export default Footer;
