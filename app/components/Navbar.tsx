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
            ? "bg-white shadow-xl"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex h-16 sm:h-20 lg:h-24 items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Prime Dental Studio"
              width={220}
              height={80}
              className="h-10 sm:h-12 lg:h-16 w-auto object-contain"
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
  className="lg:hidden rounded-xl p-2 transition hover:bg-sky-100"
>
  {menuOpen ? (
    <HiX className="text-3xl text-slate-900" />
  ) : (
    <HiOutlineMenuAlt3 className="text-3xl text-slate-900" />
  )}
</button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
  <>
    <div
      onClick={() => setMenuOpen(false)}
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md lg:hidden"
    />

    <div className="fixed top-0 right-0 z-50 h-screen w-[85%] max-w-[340px] bg-white shadow-2xl lg:hidden overflow-y-auto transition duration-300"
    style={{
  animation: "slideIn 0.35s ease"
}}
    >

      <div className="flex items-center justify-between border-b p-5">

        <Image
          src="/logo.png"
          alt="Prime Dental Studio"
          width={150}
          height={50}
          className="h-10 w-auto"
        />

        <button onClick={() => setMenuOpen(false)}>
          <HiX className="text-3xl text-slate-800" />
        </button>

      </div>

      <nav className="flex flex-col mt-3">

        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="px-6 py-5 text-lg font-semibold text-slate-700 border-b hover:bg-sky-50 transition"
          >
            {item.name}
          </a>
        ))}

      </nav>

      <div className="p-6">

        <a
          href="#appointment"
          onClick={() => setMenuOpen(false)}
          className="block rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 py-4 text-center font-semibold text-white shadow-lg"
        >
          Book Appointment
        </a>

      </div>

    </div>
  </>
)}
      </header>
    </>
  );
}