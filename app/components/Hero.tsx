"use client";

import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative overflow-hidden min-h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-100"
>

  {/* Animated Background */}

  <motion.div
  className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-600 opacity-70 blur-[80px]"
  animate={{
    x: [0, 40, 0],
    y: [0, 30, 0],
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

<motion.div
  className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-pink-500 opacity-50 blur-[80px]"
  animate={{
    x: [0, -40, 0],
    y: [0, -20, 0],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

<motion.div
  className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-blue-300/20 blur-[120px]"
  animate={{
    x: [0, 25, 0],
    y: [0, -25, 0],
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 9,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Floating Particles */}
{[...Array(18)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute rounded-full bg-sky-400/30"
    style={{
      width: 8,
      height: 8,
      left: `${(i * 6) % 100}%`,
      top: `${(i * 5) % 100}%`,
    }}
    animate={{
      y: [0, -120],
      opacity: [0, 1, 0],
      scale: [0.5, 1.3, 0.5],
    }}
    transition={{
      duration: 5 + (i % 4),
      repeat: Infinity,
      delay: i * 0.3,
      ease: "linear",
    }}
  />
))}

  <div className="max-w-7xl mx-auto px-6 py-24">
  <div className="grid grid-cols-1">

          {/* LEFT */}

          <div>
<div className="flex flex-wrap gap-4">

  <div className="bg-yellow-400 text-black px-5 py-3 rounded-full shadow-lg font-semibold flex items-center gap-2">
    ⭐ 4.9 Google Rating
  </div>

  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-3 rounded-full shadow-lg font-semibold animate-pulse">
    🎉 Consultation Fee ₹200
  </div>

  <div className="bg-sky-600 text-white px-5 py-3 rounded-full shadow-lg font-semibold">
    🕒 Open 24×7
  </div>

</div>
           

            <motion.h1
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  className="relative text-5xl md:text-7xl font-black leading-tight text-slate-900 drop-shadow-sm"
>
  <motion.div
  className="absolute -z-10 w-72 h-72 rounded-full bg-cyan-300/30 blur-[90px]"
  animate={{
    x: [-40, 40, -40],
    y: [-20, 20, -20],
    scale: [1, 1.2, 1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
Advanced Dental Care
With Modern Technology
  <br />
  <span className="text-sky-600"> Your Smile,
    <br />
    <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent"></span>
Our Passion</span>
</motion.h1>



<motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
  delay: 0.3,
  duration: 1,
  ease: "easeOut",
}}
  className="mt-6 text-lg text-gray-600 leading-8"
>
  Experience painless, affordable and advanced dental treatments with highly experienced dentists using modern technology.
<br />
<br />
Creating confident smiles for thousands of happy patients in Greater Noida.
 
</motion.p>

        

            {/* Buttons */}

            <motion.div
            whileHover={{ scale: 1.01 }}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  className="mt-10 flex flex-wrap gap-5"
>
<motion.a
  href="#appointment"

  animate={{
    scale: [1, 1.04, 1],
    y: [0, -3, 0],
  }}

  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}

  whileHover={{
    scale: 1.1,
    y: -6,
  }}

  whileTap={{ scale: 0.95 }}

  className="bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 text-white px-9 py-4 rounded-full font-bold shadow-2xl"
>
  Book Appointment
</motion.a>
              

              <a
                href="tel:+919343460176"
                className="border-2 border-sky-600 text-sky-700 px-9 py-4 rounded-full font-bold hover:bg-sky-600 hover:text-white hover:shadow-xl transition-all duration-300"
              >
                <FaPhoneAlt className="inline mr-2" />
                Call Now
              </a>

              <a
                href="https://wa.me/919343460176"
                target="_blank"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-9 py-4 rounded-full font-bold shadow-2xl hover:scale-110 hover:shadow-green-300 transition-all duration-300"
              >
                <FaWhatsapp className="inline mr-2" />
                WhatsApp
              </a>

              </motion.div>

          </div>
  </div>
  </div>
</section>
        
  );
}