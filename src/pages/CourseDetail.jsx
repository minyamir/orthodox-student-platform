import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const courseData = {
  1: { title: "Intro to Orthodox Faith", description: "Learn the basics of the Orthodox faith, including its history, traditions, and spiritual practices.", video: "/videos/course1.mp4" },
  2: { title: "Church History", description: "Explore church history from its founding to modern times, understanding key events and figures.", video: "/videos/course2.mp4" },
  3: { title: "Spiritual Practices", description: "Learn prayer, fasting, and spiritual discipline to deepen your faith and daily life. Learn the basics of the Orthodox faith, including its history, traditions, and spiritual practices. Learn the basics of the Orthodox faith, including its history, traditions, and spiritual practices.", video: "/videos/course3.mp4" },
  4: { title: "Orthodox Art & Icons", description: "Understand iconography, symbolism, and the meaning behind Orthodox art.", video: "/videos/course4.mp4" },
  5: { title: "Bible Studies", description: "Dive deeper into the Bible with guided study, commentary, and practical lessons.", video: "/videos/course5.mp4" },
};

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData[id];
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [fullHeight, setFullHeight] = useState(0);
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      setFullHeight(descRef.current.scrollHeight); // measure full height
    }
  }, [course]);

  if (!course) return <div className="p-8 text-center text-red-500">Course not found</div>;

  const collapsedHeight = 72; // ~3 lines, adjust to your line height

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto bg-gray-50 min-h-screen rounded-xl shadow-lg">
      
      {/* Video Player */}
      <video
        src={course.video}
        controls
        autoPlay
        className="w-full h-64 md:h-96 object-contain rounded-lg mb-6 shadow-xl hover:scale-105 transition-transform duration-500"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-yellow-800 drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">{course.title}</h1>

      {/* Description with dynamic See More */}
      <motion.div layout className="mb-4 relative">
        <motion.p
          ref={descRef}
          layout
          initial={false}
          animate={{ maxHeight: showFullDesc ? fullHeight : collapsedHeight }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 leading-relaxed overflow-hidden"
        >
          {course.description}
        </motion.p>

        {!showFullDesc && (
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
        )}

        {course.description.length > 100 && (
          <motion.button
            onClick={() => setShowFullDesc(!showFullDesc)}
            whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(255,215,0,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 flex items-center gap-2 text-yellow-800 font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-100 via-white to-yellow-50 border border-yellow-400 shadow-md hover:from-yellow-50 hover:to-white transition-all duration-300 text-sm"
          >
            <motion.span animate={{ rotate: showFullDesc ? 180 : 0 }} transition={{ duration: 0.3 }} className="inline-block">
              ⬇️
            </motion.span>
            {showFullDesc ? "Show Less" : "See More"}
          </motion.button>
        )}
      </motion.div>

      {/* Take Quiz Button */}
      <motion.button
        onClick={() => navigate(`/courses/${id}/quiz`)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black font-bold px-6 py-3 rounded-lg shadow-md hover:from-yellow-400 hover:to-yellow-200 transition-all duration-300"
      >
        Take Quiz
      </motion.button>
    </div>
  );
}
