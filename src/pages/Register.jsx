import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/orthodox.png";

export default function Register() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    year: "",
    department: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registration successful! Please login.");

    // Navigate to login page
    navigate("/login");

    setForm({
      fullname: "",
      email: "",
      password: "",
      year: "",
      department: "",
      phone: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-100">
      {/* LEFT SIDE — FORM */}
      <motion.div
        className="flex-1 flex items-center justify-center p-8 order-2 md:order-1"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-yellow-400/40">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">
            Student Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[ 
              { name: "fullname", type: "text", placeholder: "Full Name" },
              { name: "email", type: "email", placeholder: "Email" },
              { name: "password", type: "password", placeholder: "Password" },
              { name: "department", type: "text", placeholder: "Department" },
              { name: "phone", type: "text", placeholder: "Phone Number" },
            ].map(({ name, type, placeholder }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <input
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="w-full px-5 py-3 bg-black/60 text-yellow-100 placeholder-yellow-300 border border-yellow-400/40 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300"
                />
              </motion.div>
            ))}

            {/* Year of Study */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 bg-black/60 text-yellow-100 border border-yellow-400/40 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300"
              >
                <option value="">Select Year of Study</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="5">5th Year</option>
              </select>
            </motion.div>

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              type="submit"
              className="relative overflow-hidden w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold py-3 rounded-lg shadow-md mt-4 
                         transition-all duration-700 ease-in-out 
                         hover:from-yellow-400 hover:to-yellow-700 hover:text-black hover:shadow-yellow-400/50"
            >
              <span className="relative z-10">Register</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                               translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* RIGHT SIDE — IMAGE */}
      <motion.div
        className="flex-1 relative order-1 md:order-2 h-64 md:h-auto"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Orthodox Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 text-yellow-200 max-w-xs md:max-w-md">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            Welcome to Orthodox Student Platform
          </h3>
          <p className="text-yellow-100 text-sm md:text-base leading-relaxed">
            Unite faith and knowledge. Join a growing community of Orthodox
            students sharing ideas, wisdom, and growth.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
