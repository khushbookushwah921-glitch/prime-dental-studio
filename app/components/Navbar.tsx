"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:flex bg-sky-700 text-white justify-between items-center px-10 py-2 text-sm">
        <p>📍 Delta-1, Shivam Plaza, Greater Noida</p>

        <div className="flex items-center gap-8">
          <p>🕒 Open 24×7</p>
          <p>📞 +91 93434 60176</p>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-xl"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-24 flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Prime Dental Studio"
              width={220}
              height={80}
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-16" : "h-20"
              }`}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-slate-700 font-semibold hover:text-sky-600 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-sky-600 after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919343460176"
              className="w-11 h-11 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center hover:bg-sky-600 hover:text-white transition"
            >
              <FaPhoneAlt />
            </a>

            <a
              href="https://wa.me/919343460176"
              target="_blank"
              className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#appointment"
              className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t shadow-xl">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 border-b hover:bg-sky-50 font-semibold"
              >
                {item.name}
              </a>
            ))}

            <div className="p-5">
              <a
                href="#appointment"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-sky-600 text-white rounded-full py-3 font-semibold"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}