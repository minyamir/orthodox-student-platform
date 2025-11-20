import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/orthodox.png";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert("Logged in (demo)");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-yellow-50 overflow-hidden">
      {/* Left side - login form */}
      <motion.div
        className="flex-1 flex items-center justify-center p-8 order-2 md:order-1"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-md bg-white/90 p-8 rounded-3xl shadow-2xl border border-yellow-300 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">
            Student Login
          </h2>

          <form onSubmit={submit} className="space-y-5">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500 text-black bg-yellow-50/70 transition-all duration-200"
            />

            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500 text-black bg-yellow-50/70 transition-all duration-200"
            />

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#facc15" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Login
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Right side - image with overlay text */}
      <motion.div
        className="flex-1 relative h-64 md:h-screen order-1 md:order-2"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Orthodox"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent"></div>

        {/* Text animation overlay */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="absolute bottom-6 md:bottom-20 left-6 md:left-10 text-white max-w-xs md:max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 md:mb-3 text-yellow-400 drop-shadow-lg">
            Welcome Back
          </h1>
          <p className="text-sm md:text-lg text-gray-100 leading-relaxed">
            to the{" "}
            <span className="font-semibold text-yellow-300">
              Orthodox Student Platform
            </span>{" "}
            — where faith meets education.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
