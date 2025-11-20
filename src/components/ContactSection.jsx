import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-yellow-100 via-yellow-200/60 to-yellow-100 text-gray-900 overflow-hidden"
    >
      {/* Subtle background overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,220,80,0.25),_transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto px-6 text-center z-10">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-yellow-800 mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-800 font-medium mb-10 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]"
        >
          Send us your thoughts, questions, or feedback. We’ll reply to your student email.
        </motion.p>

        <motion.form
          onSubmit={submit}
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-lg border border-yellow-400 rounded-2xl shadow-xl p-8 text-left"
        >
          <div className="mb-6">
            <label className="block text-sm font-semibold text-yellow-800 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="student@example.com"
              className="w-full px-4 py-3 bg-white border border-yellow-500 text-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-600 outline-none placeholder-gray-500 transition"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-yellow-800 mb-2">
              Message
            </label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Type your message here..."
              rows="5"
              className="w-full px-4 py-3 bg-white border border-yellow-500 text-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-600 outline-none placeholder-gray-500 transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 8px 25px rgba(255, 215, 0, 0.7)",
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            type="submit"
            className="w-full py-3 
                       bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 
                       text-black font-extrabold 
                       rounded-lg uppercase tracking-wider 
                       shadow-lg hover:shadow-yellow-400/70 
                       border border-yellow-600 
                       transition-all duration-500 ease-in-out
                       hover:from-yellow-400 hover:to-yellow-200"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
