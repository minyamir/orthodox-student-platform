import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      className="relative py-16 bg-gradient-to-b from-yellow-100 via-yellow-200/60 to-yellow-100 overflow-hidden"
    >
      {/* Subtle background overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,220,80,0.25),_transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h3
          className="text-3xl md:text-4xl font-extrabold text-yellow-800 mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get Updates by Email
        </motion.h3>

        <p className="text-gray-800 font-medium mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
          Enter your  email to receive the latest news and campus event notifications.
        </p>

        <form
          onSubmit={submit}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@gmail.com"
            className="px-5 py-3 rounded-lg w-full md:w-96 bg-white/90 text-gray-800 border border-yellow-400 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 placeholder-gray-500 transition"
          />

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
  className="px-8 py-3 
             bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 
             text-black font-extrabold 
             rounded-lg uppercase tracking-wider 
             shadow-lg hover:shadow-yellow-400/70 
             border border-yellow-600 
             transition-all duration-500 ease-in-out
             hover:from-yellow-400 hover:to-yellow-200"
  type="submit"
>
  Subscribe
</motion.button>


        </form>
      </div>
    </section>
  );
}
