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

      <div className="text-center">

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

        <h1 className="mt-6 text-4xl font-bold text-sky-700">
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
  <div className="hidden lg:flex justify-between items-center bg-sky-700 text-white px-10 py-2 text-sm">

  <p>
    📍 Delta-1, Shivam Plaza, Greater Noida
  </p>

  <div className="flex gap-8">

    <p>🕒 Open 24×7</p>

    <p>📧 primedentalstudio@gmail.com</p>

  </div>

</div>

      <nav
  className={` relative sticky top-0 z-50 bg-white border-b border-sky-100 shadow-md transition-all duration-300 ${
    scrolled ? "py-2" : "py-4"
  }`}
>

 <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-4">

  {/* Logo */}

  <div className="flex items-center gap-3">

    <Image
  src="/logo.png"
  alt="Prime Dental Studio"
  width={180}
  height={60}
  priority
  className={`w-auto transition-all duration-300 ${
    scrolled ? "h-10" : "h-12"
  }`}
/>

  </div>

  {/* Menu */}

  <div className="hidden lg:flex items-center gap-8">

    <a href="#home" className="hover:text-sky-600 font-medium transition">Home</a>

    <a href="#about" className="hover:text-sky-600 font-medium transition">About</a>

    <a href="#services" className="hover:text-sky-600 font-medium transition">Services</a>

    <a href="#doctors" className="hover:text-sky-600 font-medium transition">Doctors</a>

    <a href="#contact" className="hover:text-sky-600 font-medium transition">Contact</a>

  </div>

  {/* Right Side */}

  <div className="hidden lg:flex items-center gap-4">

    <a
      href="tel:+919343460176"
      className="flex items-center gap-2 text-gray-700 font-semibold"
    >
      
      <FaPhoneAlt size={20} />
    </a>

    <a
      href="https://wa.me/919343460176"
      target="_blank"
      className="bg-green-500 text-white p-3 rounded-full hover:scale-110 transition"
    >
      <FaWhatsapp size={20} />
    </a>

    <a
      href="#contact"
      className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
    >
      Book Appointment
    </a>

  </div>

  {/* Mobile Button */}

  <button
onClick={() => setMenuOpen(!menuOpen)}
className="lg:hidden w-11 h-11 rounded-xl border border-sky-200 flex items-center justify-center text-2xl bg-white shadow-sm"
>
{menuOpen ? "✕" : "☰"}
</button>

</div>
    
      

  {/* Mobile Menu */}

  {menuOpen && (
  <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-sky-100 animate-in slide-in-from-top duration-300">

    <div className="flex flex-col py-4">

      {[
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Services", link: "#services" },
        { name: "Doctors", link: "#doctors" },
        { name: "Contact", link: "#contact" },
      ].map((item) => (
        <a
          key={item.name}
          href={item.link}
          onClick={() => setMenuOpen(false)}
          className="px-6 py-4 text-gray-800 font-semibold border-b border-sky-50 hover:bg-sky-50 hover:text-sky-600 transition-all"
        >
          {item.name}
        </a>
      ))}

      <div className="px-6 pt-5">

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="block w-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white text-center py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Book Appointment
        </a>

      </div>

    </div>

  </div>
)}


</nav>

 
  
    

      {/* Hero Section */}

      <section id="home"

  className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-sky-100 to-blue-200 px-5 md:px-6"
  style={{
  backgroundImage: "url('/hero.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
>
  
  <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl"></div>

<div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

<div className="absolute top-40 right-20 w-40 h-40 bg-sky-300/30 rounded-full blur-2xl"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/60"></div>
  <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center min-h-[90vh] px-4 py-24">
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight max-w-4xl">
      Advanced Dental Care for a Confident Smile
    </h1>

    <p className="mt-6 text-lg md:text-xl text-slate-700 leading-8 max-w-3xl">
      Expert Dental Treatments, Advanced Technology, and Personalized Care for Every Patient in Greater Noida.
    </p>
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

  <div className="bg-white shadow-lg rounded-full px-6 py-3 border border-sky-100">
    ⭐⭐⭐⭐⭐ Trusted by Hundreds of Patients
  </div>

  <div className="bg-sky-600 text-white rounded-full px-6 py-3 shadow-lg">
    Open 24×7
  </div>

  <div className="mt-8 inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-3 rounded-full border border-green-200 font-semibold shadow-sm">
  🎉 Consultation Fee: <span className="font-bold">₹200 </span>
</div>

</div>
 <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

  <a
    href="#appointment"
    className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition"
  >
    Book Appointment
  </a>
   

  <a
    href="tel:+919343460176"
    className="border-2 border-sky-600 text-sky-700 px-8 py-4 rounded-full font-semibold hover:bg-sky-600 hover:text-white transition"
  >
    Call Now
  </a>

  <a
    href="https://wa.me/919343460176"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
  >
    WhatsApp
  </a>

</div>

  </div>
</section>

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

      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
        About Prime Dental Studio
      </h2>

      <p className="text-gray-700 text-base md:text-lg leading-8 mb-6">
        At <span className="font-semibold text-sky-600">Prime Dental Studio</span>,
        we are dedicated to providing exceptional dental care with advanced technology,
        experienced doctors, and a patient-first approach.
      </p>

      <p className="text-gray-700 leading-8">
        Whether it's a routine check-up, cosmetic smile makeover, dental implants,
        or emergency treatment, we ensure every patient receives comfortable,
        painless, and personalized dental care.
      </p>

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

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">

          Our Services

        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 max-w-7xl mx-auto">

  {services.map((service, index) => (

    <div
      key={index}
      className="group bg-white rounded-3xl p-5 md:p-8 text-center border border-sky-100 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-sky-400 transition-all duration-300"
    >

      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-all duration-300">

        {service.icon}

      </div>

      <h3 className="text-base md:text-xl font-bold mt-5 text-slate-800">
  {service.title}
</h3>

      <p className="mt-2 text-xs md:text-sm text-gray-600 leading-6">
        Advanced dental treatment with modern technology and expert care.
      </p>

    </div>

  ))}

</div>
</section>

{/* Doctors */}

<section id="doctors" className="py-20 bg-sky-50 px-6">

  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
    Meet Our Expert Doctors
  </h2>

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
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 flex items-center justify-center text-5xl shadow-lg mb-6">
            👨‍⚕️
          </div>

          <h3 className="text-2xl font-extrabold text-sky-700 text-center">
            {doc.name}
          </h3>

          <p className="text-gray-700 text-center mt-3 leading-7">
            {doc.specialist}
          </p>

          <p className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-semibold mt-5">
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

<section className="py-20 bg-white px-6">

  <h2 className="text-4xl font-bold text-center text-gray-800">
    Why Choose Prime Dental Studio?
  </h2>

  <p className="text-center text-gray-500 mt-3 mb-12">
    We combine experience, technology, and compassionate care to give you the best dental experience.
  </p>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 max-w-7xl mx-auto">

    <div className="bg-white rounded-3xl p-5 md:p-8 text-center border border-sky-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <div className="text-4xl md:text-5xl mb-5">🦷</div>
  <h3 className="text-2xl font-bold text-slate-900 mt-5"></h3>
      <p className="text-gray-700 mt-4 leading-7">
        Modern equipment for safe and painless treatment.
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-sky-100 hover: -translate-y-2 hover: shadow-2xl transition-all duration-300">
      <div className="text-lg md:text-xl font-bold text-slate-900" >👨‍⚕️</div>
      <h3 className="text-xl font-bold">Expert Dentists</h3>
      <p className="text-gray-600 mt-3 leading-7">
        Experienced specialists providing quality dental care.
      </p>
      <p className="text-center text-gray-600 mt-4 mb-12 max-w-3xl mx-auto">
  Experience advanced technology, compassionate care, and expert dental treatment designed to give you a healthy and confident smile.
</p>
    </div>

    <div className="bg-sky-50 rounded-3xl p-8 text-center hover:shadow-xl transition">
      <div className="text-5xl mb-4">😊</div>
      <h3 className="text-xl font-bold">Patient-Centered Care</h3>
      <p className="text-gray-600 mt-3">
        Friendly environment with personalized treatment plans.
      </p>
    </div>

    <div className="bg-sky-50 rounded-3xl p-8 text-center hover:shadow-xl transition">
      <div className="text-5xl mb-4">⏰</div>
      <h3 className="text-xl font-bold">Emergency Support</h3>
      <p className="text-gray-600 mt-3">
        Quick appointments and emergency dental services.
      </p>
    </div>

  </div>

</section>


          


{/* Appointment Form */}
<section id="appointment" className="py-16 px-6 bg-gradient-to-r from-sky-100 to-white">

  <div className="max-w-3xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-3">
  Book Your Appointment
</h2>

<p className="text-center text-gray-600 mb-10">
  Schedule your visit with our experienced dental specialists.
</p>

    {/* Card wrapper */}
    <div className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition duration-300">

      <form onSubmit={handleAppointment} className="grid gap-5">

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
  className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all duration-300 ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-gradient-to-r from-sky-600 to-cyan-500 hover:shadow-2xl hover:scale-[1.02] active:scale-95"
  }`}
>
  {loading ? "Booking..." : "Book My Appointment"}
</button>
<p className="text-center text-sm text-gray-500 mt-3">
  We usually confirm appointments within <span className="font-semibold text-sky-600">15–30 minutes</span>.
</p>


      </form>

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
      



    



      {/* Contact */}

      <section id="contact" className="bg-slate-900 text-white py-16 text-center">

  <h2 className="text-4xl font-bold mb-6">

    Contact Us

  </h2>
  <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
  
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/9343460176"
    target="_blank"
    rel="noopener noreferer"
     className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 shadow-2xl flex items-center justify-center text-white text-3xl hover:scale-110 transition-all duration-300"
  >
    <FaWhatsapp/>
  </a>

  {/* Call Button */}
  <a
    href="tel:919343460176"
     className="fixed bottom-24 right-6 z-50 w-16 h-16 rounded-full bg-sky-600 shadow-2xl flex items-center justify-center text-white text-3xl hover:scale-110 transition-all duration-300"
  >
    <FaPhoneAlt/>
  </a>

</div>

<div className="max-w-4xl mx-auto mt-12 text-center">
  <h3 className="text-2xl font-bold mb-4">
    Prime Dental Studio
  </h3>

  <p>📍 Delta-1, Shivam Plaza, Greater Noida</p>
  <p>📞 919343460176</p>
  <p>🕒 Open 24×7</p>
  <a
  href="https://maps.google.com/?q=Delta-1+Shivam+Plaza+Greater+Noida"
  target="_blank"
  className="text-sky-600 font-semibold"
>
  Get Directions
</a>
</div>



  


</section>

<footer className="bg-slate-900 text-white py-10 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

    <div>
      <h3 className="text-2xl font-bold mb-3">
        Prime Dental Studio
      </h3>

      <p className="text-gray-300">
        Advanced Dental Care for a Confident Smile
      </p>
    </div>

    <div>
      <h4 className="font-semibold mb-3">
        Contact Info
      </h4>

      <p>📍 Delta-1, Shivam Plaza, Greater Noida</p>
      <p>📞 9343460176</p>
      <p>🕒 Open 24×7</p>
    </div>

    <div>
      <h4 className="font-semibold mb-3">
        Quick Links
      </h4>

      <div className="flex flex-col gap-2">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#doctors">Doctors</a>
        <a href="#contact">Contact</a>
      </div>
    </div>

  </div>

  <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
    © 2026 Prime Dental Studio. All Rights Reserved.
  </div>
</footer>



    </main>
  )

};

