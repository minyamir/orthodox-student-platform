import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import NewsSection from "../components/NewsSection";
import ContactSection from "../components/ContactSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in by checking the token in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <main className="bg-gradient-to-b from-black via-white to-yellow-50 min-h-[calc(100vh-5rem)]">
      {/* Always visible */}
      <HeroSection />

      {/* Visible only after login */}
      {isLoggedIn && (
        <>
          <NewsSection />
          <Newsletter />
          <ContactSection />
        </>
      )}

      <AboutSection />
      <Footer />
    </main>
  );
}
