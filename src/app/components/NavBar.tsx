"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const renderLinks = (isMobile: boolean) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`hover:underline ${
          pathname === link.href
            ? "text-orange-600 font-semibold"
            : "text-black"
        } ${isMobile ? "text-center" : ""}`}
        onClick={() => isMobile && setIsOpen(false)} // Close mobile menu on click
      >
        {link.label}
      </Link>
    ));

  return (
    <nav className="fixed top-5 px-5 w-full z-50">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="container mx-auto px-10 py-3 flex bg-white justify-between items-center rounded-2xl shadow-md"
      >
        <Link href="/" className="text-2xl font-extrabold text-gray-800">
          JOOPA DIGITAL
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">{renderLinks(false)}</div>

        {/* Desktop Get In Touch Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="relative flex h-12 text-white items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-orange-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
          >
            <span className="relative text-base font-semibold text-white dark:text-dark">
              Get Started
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer text-orange-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white my-2 rounded-2xl shadow-md p-4 space-y-3 flex flex-col items-center"
        >
          {renderLinks(true)}
          {/* Mobile Get In Touch Button */}
          <a
            href="#"
            className="relative flex h-12 text-white w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-orange-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative text-base font-semibold text-white dark:text-dark">
              Get Started
            </span>
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
