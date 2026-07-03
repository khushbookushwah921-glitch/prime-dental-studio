"use client";
import { useState, useEffect } from "react";

import { collection, addDoc } from "firebase/firestore";

import { db } from "../lib/firebase";
import { FaWhatsapp , FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import {
  FaTooth,
  FaSmile,
  FaTeeth,
  FaChild,
  FaClinicMedical,
  FaUserMd,
} from "react-icons/fa";
import FloatingOffer from "./components/FloatingOffer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {

  const [name, setName] = useState("");

const [mobile, setMobile] = useState("");

const [email, setEmail] = useState("");

const [treatment, setTreatment] = useState("");

const [date, setDate] = useState("");
const [menuOpen, setMenuOpen] = useState(false);
const [loading, setLoading] = useState(true);
 const [showTopButton, setShowTopButton] = useState(false);
const offers = ["/offer1.jpg", "/offer2.jpg"];

const [currentOffer, setCurrentOffer] = useState(0);
const [scrolled, setScrolled] = useState(false);
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



const handleAppointment = async (e:React.FormEvent<HTMLFormElement >

) =>{

  e.preventDefault();
  if (!name.trim()) {
  alert("Please enter your name");
  return;
}

if (!mobile.trim()) {
  alert("Please enter mobile number");
  return;
}

if (!/^[0-9]{10}$/.test(mobile)) {
  alert("Please enter a valid 10-digit mobile number");
  return;
}

if (!treatment || treatment === "Select Treatment") {
  alert("Please select a treatment");
  return;
}

if (!date) {
  alert("Please select an appointment date");
  return;
}

  try {

    await addDoc(collection(db, "appointments"), {

      name,

      mobile,

      email,

      treatment,

      date,

      createdAt: new Date(),

    });

   



    
    const whatsappMessage =
`Hello Prime Dental Studio,

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Treatment: ${treatment}
Preferred Date: ${date}`;

window.open(
  `https://wa.me/919343460176?text=${encodeURIComponent(whatsappMessage)}`,
  "_blank"
);

  alert("✅ Appointment Booked Successfully!");


    setName("");

    setMobile("");

    setEmail("");

    setTreatment("");

    setDate("");

  } catch (error) {

    console.error(error);

    alert("Something went wrong");

  }

};

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


   useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1200);

  return () => clearTimeout(timer);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentOffer((prev) => (prev + 1) % offers.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const handleScroll = () => {
    setShowTopButton(window.scrollY > 400);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


    const services = [
  { title: "Dental Implants", icon: <FaTooth size={38} /> },
  { title: "Root Canal", icon: <FaClinicMedical size={38} /> },
  { title: "Teeth Whitening", icon: <FaSmile size={38} /> },
  { title: "Smile Designing", icon: <FaSmile size={38} /> },
  { title: "Braces & Aligners", icon: <FaTeeth size={38} /> },
  { title: "Cosmetic Dentistry", icon: <FaUserMd size={38} /> },
  { title: "Dental Consultation", icon: <FaUserMd size={38} /> },
  { title: "Crowns & Bridges", icon: <FaTooth size={38} /> },
  { title: "Veneers", icon: <FaSmile size={38} /> },
  { title: "Dentures", icon: <FaTeeth size={38} /> },
  { title: "Scaling & Polishing", icon: <FaTooth size={38} /> },
  { title: "Tooth Extraction", icon: <FaTooth size={38} /> },
  { title: "Wisdom Tooth Removal", icon: <FaTooth size={38} /> },
  { title: "Pediatric Dentistry", icon: <FaChild size={38} /> },
  { title: "Emergency Dental Care", icon: <FaClinicMedical size={38} /> },
];
  
if (loading) {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-sky-100 via-white to-cyan-100 flex items-center justify-center animate-fadeIn">

      <div className="text-center px-6">

        <div className="animate-pulse">
          <Image
            src="/logo.png"
            alt="Prime Dental Studio"
            width={220}
            height={220}
            className="mx-auto w-auto h-auto"
            priority
          />
        </div>

         {/* Welcome Text */}
        <p className="mt-5 text-lg md:text-xl font-semibold tracking-widest uppercase text-sky-600 animate-pulse">
          Welcome To
        </p>

              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-700 bg-clip-text text-transparent animate-in fade-in zoom-in duration-700">
          Prime Dental Studio
        </h1>

        

        <p className="mt-3 text-lg text-gray-600">
          Creating Beautiful Smiles...
        </p>

        <div className="flex justify-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-sky-600 animate-bounce"></span>
          <span
            className="w-3 h-3 rounded-full bg-sky-600 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="w-3 h-3 rounded-full bg-sky-600 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>

      </div>

    </div>
  );
}

  return (

    <main
  className={`min-h-screen bg-white transition-all duration-700 ${
    loading ? "opacity-0 scale-95" : "opacity-100 scale-100"
  }`}
>
  
<Navbar />
<Hero />

{/* Special Offers */}

<section className="py-16 bg-gradient-to-b from-sky-50 to-white">

  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-8">

      <span className="bg-red-500 text-white px-4 py-1 rounded-full animate-pulse">
        🔥 Limited Time Offer
      </span>

      <h2 className="text-4xl font-bold mt-4 text-gray-800">
        Special Dental Offers
      </h2>

      <p className="text-gray-600 mt-2">
        Book your appointment today and enjoy exclusive benefits.
      </p>

    </div>

    <div className="flex justify-center">

      <Image
        src={offers[currentOffer]}
        alt="Dental Offer"
        width={420}
        height={650}
        className="rounded-3xl shadow-2xl w-[280px] md:w-[320px] lg:w-[360px] h-auto transition-all duration-700"
      />

    </div>

    <div className="flex justify-center gap-3 mt-6">

      {offers.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentOffer(index)}
          className={`w-3 h-3 rounded-full ${
            currentOffer === index
              ? "bg-sky-600"
              : "bg-gray-300"
          }`}
        />
      ))}

    </div>

  </div>

</section>



{/* About Us */}

<section id= "about" className="py-20 bg-gradient-to-b from-sky-50 to-white px-5 lg:px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Side */}

    <div>

      <div className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold mb-4">
  ✨ About Us
</div>

<h2 className="text-4xl md:text-6xl font-black leading-tight text-slate-900">
  Creating
  <span className="text-sky-600"> Beautiful Smiles </span>
  Every Day
</h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
Prime Dental Studio is committed to providing world-class dental care with modern technology, experienced doctors, and a patient-first approach.

From routine dental checkups to advanced smile makeovers and dental implants, we ensure every treatment is comfortable, painless, and personalized.
</p>

      <p className="text-gray-700 leading-8">
        Whether it's a routine check-up, cosmetic smile makeover, dental implants,
        or emergency treatment, we ensure every patient receives comfortable,
        painless, and personalized dental care.
      </p>

      <div className="grid grid-cols-2 gap-5 mt-10">

  <div className="bg-gradient-to-r from-sky-200 to-cyan-100 rounded-2xl p-5 shadow-lg hover:scale-105 transition-all">
    <div className="text-4xl">🦷</div>
    <h3 className="mt-3 text-xl font-extrabold text-slate-900">Advanced Technology</h3>
    <p className="mt-2 text-base text-slate-700 leading-7">
      Modern dental equipment for precise treatment.
    </p>
  </div>

  <div className="bg-gradient-to-r from-green-200 to-emerald-100 rounded-2xl p-5 shadow-lg hover:scale-105 transition-all">
    <div className="text-4xl">👨‍⚕️</div>
    <h3 className="font-bold text-lg mt-3">Experienced Doctors</h3>
    <p className="text-gray-600 text-sm mt-2">
      10+ years of trusted dental expertise.
    </p>
  </div>

  <div className="bg-gradient-to-r from-yellow-200 to-orange-100 rounded-2xl p-5 shadow-lg hover:scale-105 transition-all">
    <div className="text-4xl">😊</div>
    <h3 className="font-bold text-lg mt-3">Painless Treatment</h3>
    <p className="text-gray-600 text-sm mt-2">
      Comfortable care with a patient-first approach.
    </p>
  </div>

  <div className="bg-gradient-to-r from-pink-200 to-rose-100 rounded-2xl p-5 shadow-lg hover:scale-105 transition-all">
    <div className="text-4xl">💰</div>
    <h3 className="font-bold text-lg mt-3">Affordable Care</h3>
    <p className="text-gray-600 text-sm mt-2">
      High-quality treatments at transparent prices.
    </p>
  </div>

</div>

    </div>

    {/* Right Side */}

    <div className="flex justify-center">
  <div className="relative w-full max-w-md h-[350px] rounded-[30px] overflow-hidden shadow-2xl border-4 border-white">
    <Image
      src="/clinicimage.jpg"
      alt="Prime Dental Studio Clinic"
      fill
      className="object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>
</div>
</div>
</section>

      {/* Services */}
      

      <section id="services" className="py-20 bg-white px-6">
<div className="text-center mb-14">

  <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
    ✨ Our Treatments
  </span>

  <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
    Complete Dental Care
    <span className="text-sky-600"> Under One Roof</span>
  </h2>

  <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
    From routine dental checkups to smile makeovers, implants and cosmetic dentistry,
    we provide comprehensive dental solutions for your entire family.
  </p>

</div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 max-w-7xl mx-auto">

  {services.map((service, index) => (

    <div
      key={index}
      className="group relative overflow-hidden rounded-3xl p-6 md:p-8 text-center bg-white border border-sky-100 shadow-lg hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(14,165,233,0.25)] transition-all duration-500"
    >

      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-sky-400/20"></div>

      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 text-white flex items-center justify-center text-3xl shadow-xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">

        {service.icon}

      </div>

      <h3 className="text-lg md:text-2xl font-extrabold mt-6 text-slate-900" >
  {service.title}
</h3>

      <p className="mt-2 text-xs md:text-sm text-gray-600 leading-6">
        Personalized treatment using advanced technology for safe, painless and long-lasting results.
      </p>

        <div className="mt-6 flex justify-center">

  <a
  href="#"
  className="group relative overflow-hidden rounded-3xl p-6 md:p-8 text-center bg-white border border-sky-100 shadow-lg hover:-translate-y-4 hover:scale-[1.03] hover:border-sky-300 hover:shadow-[0_25px_60px_rgba(14,165,233,0.30)] transition-all duration-500"
>
  <span>
    Learn More
  </span>

  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />

  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
</a>

</div>
    </div>

  ))}

</div>
</section>

   {/* Before & After Smile Gallery */}

<section className="py-24 bg-gradient-to-b from-white to-sky-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">

      <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
        ✨ Smile Gallery
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
        Beautiful Smile
        <span className="text-sky-600"> Transformations</span>
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        See how our advanced dental treatments have transformed our patients' smiles.
      </p>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

      {[1,2,3,4,5,6].map((item)=>(
       <div
  key={item}
  className="group overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
>

          <div className="relative h-52 sm:h-60 lg:h-72 bg-gradient-to-br from-sky-200 via-cyan-100 to-blue-100 flex items-center justify-center overflow-hidden">
            <span className="text-6xl sm:text-7xl transition-transform duration-300 group-hover:scale-110">
    😁
</span>

            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>

          <div className="p-5 sm:p-6">

    <h3 className="text-xl font-bold text-slate-900">
        Smile Makeover
    </h3>

    <p className="mt-2 text-gray-600 leading-7">
        Cosmetic Dentistry & Teeth Whitening
    </p>

</div>

        </div>
      ))}

    </div>

  </div>

</section>


{/* Doctors */}

<section id="doctors" className="py-20 bg-sky-50 px-6">

  <div className="text-center mb-14">

  <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
    👨‍⚕️ Our Experts
  </span>

  <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
    Meet Our
    <span className="text-sky-600"> Experienced Doctors</span>
  </h2>

  <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
    Our highly qualified dental specialists are committed to providing personalized,
    painless and advanced dental care for every patient.
  </p>

</div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

    {[
      {
        name: "Dr. Bhawna Singh",
        specialist:
          "Cosmetic Dentist, Oral Surgeon, Pediatric Dentistry, Cosmetic Dentistry",
        experience: "+10 Years Clinical Experience",
        hospital: "Dental Surgeon, NDMC",
      },
      {
        name: "Dr. Chetan Pratap Singh",
        specialist:
          "Dental Implants, Root Canal Treatment, Teeth Whitening, Smile Designing, Braces & Aligners, Crowns & Bridges",
        experience: "+10 Years Clinical Experience",
        hospital: "Dental Surgeon, ECHS",
      },
    ].map((doc, index) => (
      <div
        key={index}
        className="bg-white rounded-3xl border border-sky-100 shadow-lg p-6 md:p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex flex-col items-center">

          {/* Doctor Photo */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white text-5xl shadow-xl">
  👨‍⚕️
</div>

          <h3 className="text-2xl font-extrabold text-sky-700 text-center">
            {doc.name}
          </h3>

          <p className="text-gray-700 text-center mt-3 leading-7">
            {doc.specialist}
          </p>

          <p className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-5 py-2 rounded-full font-bold mt-5 shadow-lg">
            {doc.experience}
          </p>

          <p className="text-gray-600 mt-4">
            {doc.hospital}
          </p>
          <div className="mt-6">

<a
href="#appointment"
className="inline-block bg-gradient-to-r from-sky-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
>
Book Consultation
</a>

</div>

        </div>
      </div>
    ))}
  </div>

</section>

{/* Testimonials */}

<section className="py-20 bg-gradient-to-b from-white to-sky-50 px-6">

  <h2 className="text-4xl font-bold text-center text-gray-800">
    What Our Patients Say
  </h2>

  <p className="text-center text-gray-500 mt-3 mb-12">
    Trusted by hundreds of happy patients.
  </p>

  <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

    {[
      {
        name: "Rahul Sharma",
        review:
          "Excellent treatment and very friendly doctors. The clinic is clean and the entire procedure was painless.",
        rating: "★★★★★",
      },
      {
        name: "Priya Verma",
        review:
          "I got my teeth whitening done here and the results were amazing. Highly recommended!",
        rating: "★★★★★",
      },
      {
        name: "Amit Singh",
        review:
          "Professional staff, modern equipment and excellent patient care. Best dental clinic in Greater Noida.",
        rating: "★★★★★",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-3xl border border-sky-100 shadow-lg p-6 md:p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
      >
        <div className="text-yellow-400 text-2xl">
          {item.rating}
        </div>
        
        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
⭐ 5.0 Patient Rating
</div>

        <p className="text-gray-700 mt-5 leading-8 italic">
          "{item.review}"
        </p>

        <div className="mt-6 flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white flex items-center justify-center text-xl font-bold shadow-md">
            {item.name.charAt(0)}
          </div>

          <div>
            <h4 className="font-bold text-gray-800">
              {item.name}
            </h4>

            <p className="text-sm text-gray-500">
              Happy Patient
            </p>
          </div>

        </div>

      </div>
    ))}

  </div>

</section>


{/* Why Choose Us */}

<section className="py-24 bg-gradient-to-b from-sky-50 to-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">

      <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
        ⭐ Why Choose Us
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
        Why Choose
        <span className="text-sky-600"> Prime Dental Studio?</span>
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        We combine modern technology, experienced dentists and patient-focused
        care to give you a comfortable and confident smile.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: "🦷",
          title: "Modern Equipment",
          text: "Latest dental technology for accurate treatment.",
        },
        {
          icon: "😊",
          title: "Pain-Free Care",
          text: "Comfortable and stress-free dental procedures.",
        },
        {
          icon: "👨‍⚕️",
          title: "Expert Dentists",
          text: "Experienced doctors with personalized care.",
        },
        {
          icon: "⭐",
          title: "5000+ Happy Patients",
          text: "Trusted by families across Greater Noida.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
        >
          <div className="text-5xl">{item.icon}</div>

          <h3 className="mt-5 text-xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            {item.text}
          </p>
        </div>
      ))}

    </div>

  </div>

</section>

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">

      <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
        🦷 Our Process
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
        Your Journey To A
        <span className="text-sky-600"> Healthy Smile</span>
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        Simple, transparent and patient-friendly treatment process.
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        {
          step: "01",
          title: "Book Appointment",
          icon: "📅",
        },
        {
          step: "02",
          title: "Dental Check-up",
          icon: "🦷",
        },
        {
          step: "03",
          title: "Treatment Plan",
          icon: "📋",
        },
        {
          step: "04",
          title: "Healthy Smile",
          icon: "😁",
        },
      ].map((item) => (

        <div
          key={item.step}
          className="relative bg-sky-50 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all"
        >

          <div className="absolute top-5 right-5 text-sky-200 font-black text-5xl">
            {item.step}
          </div>

          <div className="text-6xl mb-5">
            {item.icon}
          </div>

          <h3 className="font-bold text-xl">
            {item.title}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

<FAQ />


{/* Appointment Form */}
<section id="appointment" className="py-16 px-6 bg-gradient-to-r from-sky-100 to-white">

  <div className="max-w-3xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-black text-center text-slate-900">
  Book Your Appointment
</h2>

<p className="text-center text-gray-600 mt-4 mb-10">
  Fill in your details and we'll contact you shortly to confirm your appointment.
</p>

    {/* Card wrapper */}
    <div className="bg-white rounded-[30px] shadow-2xl border border-sky-100 p-8 md:p-10">

      <form onSubmit={handleAppointment} className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Full Name"
          required
        className="w-full rounded-xl border border-sky-200 bg-slate-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full rounded-xl border border-sky-200 bg-slate-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-sky-200 bg-slate-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          
        />

        <select
          required
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          className="w-full rounded-xl border border-sky-200 bg-slate-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          
        >
          <option value="">Select Treatment</option>
          <option>Dental Implants</option>
          <option>Root Canal Treatment</option>
          <option>Teeth Whitening</option>
          <option>Braces & Aligners</option>
          <option>Smile Designing</option>
          <option>Cosmetic Dentistry</option>
          <option>Dental Consultation</option>
          <option>Crowns and Bridges</option>
          <option>Veneers</option>
          <option>Dentures</option>
          <option>Scaling and Polishing</option>
          <option>Wisdom Tooth Extraction</option>
          <option>Pediatric Dentistry</option>
          <option>Emergency Dental Care</option>
        </select>

        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-xl border border-sky-200 bg-slate-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          
        />

        <button
  type="submit"
  disabled={loading}
  className={`w-full md:col-span-2 py-4 rounded-xl text-lg font-bold transition-all duration-300  ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-gradient-to-r from-sky-600 to-cyan-500 hover:shadow-2xl hover:scale-[1.02] active:scale-95"
  }`}
>
  {loading ? "Booking..." : "Book My Appointment"}
</button>


      </form>
      <p className="text-center text-sm text-gray-500 mt-3">
  We usually confirm appointments within <span className="font-semibold text-sky-600">15–30 minutes</span>.
</p>


    </div>
     
     <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 p-5">
  <h3 className="font-semibold text-slate-800 mb-2">
    Consultation Includes
  </h3>

  <ul className="space-y-2 text-gray-700 text-sm">
    <li>✔ Complete Dental Check-up</li>
    <li>✔ Oral Health Assessment</li>
    <li>✔ Personalized Treatment Advice</li>
    <li>✔ Digital Treatment Consultation</li>
  </ul>
</div>

  </div>
</section>
      {/* Contact Section */}

<section
  id="contact"
  className="py-20 bg-gradient-to-b from-white to-sky-50"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
        📍 Contact Us
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
        Visit Prime Dental Studio
      </h2>

      <p className="mt-4 text-gray-600">
        We'd love to welcome you to our clinic.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Left Card */}

      <div className="bg-white rounded-3xl shadow-2xl p-8">

        <div className="space-y-8">

          <div>
            <h3 className="font-bold text-xl text-sky-700">
              📍 Address
            </h3>

            <p className="text-gray-600 mt-2">
              Delta-1, Shivam Plaza,
              Greater Noida, Uttar Pradesh
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl text-sky-700">
              📞 Phone
            </h3>

            <a
              href="tel:+919343460176"
              className="text-gray-600 hover:text-sky-600"
            >
              +91 93434 60176
            </a>
          </div>

          <div>
            <h3 className="font-bold text-xl text-sky-700">
              📧 Email
            </h3>

            <p className="text-gray-600">
              primedentalstudio@gmail.com
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl text-sky-700">
              🕒 Timing
            </h3>

            <p className="text-gray-600">
              Open 24×7
            </p>
          </div>

        </div>

        <div className="flex gap-4 mt-10">

          <a
            href="tel:+919343460176"
            className="flex-1 text-center bg-sky-600 text-white py-4 rounded-xl font-bold hover:bg-sky-700 transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919343460176"
            target="_blank"
            className="flex-1 text-center bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

      {/* Google Map */}

      <div className="rounded-3xl overflow-hidden shadow-2xl">

        <iframe
          src="https://www.google.com/maps?q=Prime+Dental+Studio+Greater+Noida&output=embed"
          width="100%"
          height="100%"
          className="min-h-[500px] border-0"
          loading="lazy"
        ></iframe>

      </div>

    </div>

  </div>
</section>

{/* Footer */}

<footer className="bg-slate-900 text-white pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

    {/* Clinic */}

    <div>
      <Image
        src="/logo.png"
        alt="Prime Dental Studio"
        width={240}
        height={80}
        className="w-56 h-auto brightness-[3] contrast-[2]"
      />

      <p className="mt-5 text-gray-300 leading-7">
        Prime Dental Studio provides advanced, painless and affordable dental
        treatments with modern technology and compassionate care.
      </p>
    </div>

    {/* Quick Links */}

    <div>
      <h3 className="text-2xl font-bold mb-5">
        Quick Links
      </h3>

      <div className="space-y-3">

        <a href="#home" className="block hover:text-sky-400">
          Home
        </a>

        <a href="#about" className="block hover:text-sky-400">
          About
        </a>

        <a href="#services" className="block hover:text-sky-400">
          Services
        </a>

        <a href="#appointment" className="block hover:text-sky-400">
          Appointment
        </a>

        <a href="#contact" className="block hover:text-sky-400">
          Contact
        </a>

      </div>
    </div>

    {/* Contact */}

    <div>
      <h3 className="text-2xl font-bold mb-5">
        Contact
      </h3>

      <div className="space-y-4 text-gray-300">

        <p>📍 Delta-1, Shivam Plaza, Greater Noida</p>

        <p>📞 +91 93434 60176</p>

        <p>📧 primedentalstudio@gmail.com</p>

        <p>🕒 Open 24×7</p>

      </div>
    </div>

  </div>

  <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-400">
    © {new Date().getFullYear()} Prime Dental Studio. All Rights Reserved.
  </div>
</footer>

{/* Floating WhatsApp */}

<a
  href="https://wa.me/919343460176"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 left-6 z-[9999] w-16 h-16 rounded-full bg-green-500 shadow-2xl flex items-center justify-center text-white text-3xl hover:scale-110 transition-all duration-300 animate-bounce"
>
  <FaWhatsapp />
</a>

{/* Back To Top */}

{showTopButton && (
  <button
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-sky-600 text-white shadow-2xl hover:bg-sky-700 hover:scale-110 transition-all duration-300"
  >
    ↑
  </button>
)}

</main>
  )};



