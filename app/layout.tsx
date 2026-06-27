import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Dental Studio | Best Dental Clinic in Greater Noida",
  description:
    "Expert dental care in Greater Noida. Dental Implants, Root Canal Treatment, Teeth Whitening, Smile Designing, Braces & Aligners, Cosmetic Dentistry, Pediatric Dentistry and Emergency Dental Care.",
  keywords: [
    "Dental Clinic Greater Noida",
    "Dentist in Greater Noida",
    "Dental Implants",
    "Root Canal Treatment",
    "Teeth Whitening",
    "Braces and Aligners",
    "Cosmetic Dentistry",
    "Prime Dental Studio"
  ],
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
