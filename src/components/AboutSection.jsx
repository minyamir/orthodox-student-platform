import React from "react";
import a1 from "../assets/news1.png";
import a2 from "../assets/news2.png";
import a3 from "../assets/news3.png";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-4xl font-extrabold text-yellow-700 mb-6" initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}}>About the Platform</motion.h2>
        <p className="text-gray-700 mb-6 max-w-3xl">Our mission: connect Orthodox students, provide spiritual resources and campus events. Our vision: a supportive network across campuses.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[a1,a2,a3].map((img, i)=>(
            <motion.div key={i} className="rounded-lg overflow-hidden shadow-md bg-white" initial={{scale:0.98,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{delay: i*0.12}}>
              <img src={img} alt={`about-${i}`} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-yellow-700">Program {i+1}</h4>
                <p className="text-sm text-gray-600 mt-2">Short explanation about this program and how it supports students.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
