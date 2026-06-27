"use client";
import { useState } from "react";

export default function FloatingOffer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 cursor-pointer"
      >
        <div className="bg-red-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
          🔥 Offer
        </div>
      </div>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          
          <div className="bg-white rounded-xl overflow-hidden max-w-md w-[90%] relative shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 bg-black text-white rounded-full px-2"
            >
              ✖
            </button>

            {/* Poster Image */}
            <img
              src="/offer.jpg"   // 👈 yahan apna poster daalna
              alt="Offer"
              className="w-full h-auto"
            />

            {/* CTA Button */}
            <div className="p-4 text-center">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                Book Appointment
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}