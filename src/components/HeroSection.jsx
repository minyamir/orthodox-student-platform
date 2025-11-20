import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/brana.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* background */}
      <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover brightness-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

      <div className="container mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <motion.h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 leading-tight mb-4"
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to the Orthodox Student Platform
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A space for faith, learning, and community — events, news, and resources curated for Orthodox students.
          </motion.p>

          <div className="flex justify-center md:justify-start gap-4">
            <motion.a href="#news" whileHover={{ scale: 1.04 }} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg">
              Explore News
            </motion.a>
            <motion.a href="#newsletter" whileHover={{ scale: 1.04 }} className="border border-yellow-500 text-yellow-300 font-semibold py-3 px-6 rounded-full">
              Subscribe
            </motion.a>
          </div>
        </motion.div>

        {/* image card */}
        <motion.div className="flex-1 max-w-lg w-full"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/30">
            <img src={heroImage} alt="hero" className="w-full h-80 object-cover" />
            <div className="p-6 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-yellow-300">Orthodox Student Community</h3>
              <p className="text-sm text-gray-200 mt-2">Join events, read news and connect with students across campuses.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* subtle floating shapes */}
      <motion.div className="pointer-events-none absolute -right-24 top-20 w-48 h-48 rounded-full bg-yellow-400/10 blur-3xl" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 6 }} />
    </section>
  );
}
