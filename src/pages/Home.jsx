import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import NewsSection from "../components/NewsSection";
import ContactSection from "../components/ContactSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main  className="bg-gradient-to-b from-black via-white to-yellow-50 min-h-[calc(100vh-5rem)]">
      <HeroSection />
       <NewsSection />
       <Newsletter />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
