import React from "react";
import { useNavigate } from "react-router-dom";

import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";

const courses = [
  { id: 1, title: "Intro to Orthodox Faith", description: "Understand the foundation of the Orthodox belief.", image: course1 },
  { id: 2, title: "Church History", description: "Explore the evolution and milestones of the church.", image: course2 },
  { id: 3, title: "Spiritual Practices", description: "Learn prayer, fasting, and spiritual discipline.", image: course3 },
  { id: 4, title: "Orthodox Art & Icons", description: "Discover the beauty of iconography and symbolism.", image: course4 },
  { id: 5, title: "Bible Studies", description: "Dive deeper into Scripture with guided studies.", image: course5 },
];

export default function Courses() {
  const navigate = useNavigate();

  const goToCourseDetail = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen py-12 px-4 md:px-12">
      
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
        Explore Courses
      </h1>
      <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
        Learn, grow, and deepen your understanding with structured Orthodox teachings.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200"
            onClick={() => goToCourseDetail(course.id)}
          >
            {/* Course image */}
            <div className="overflow-hidden h-52">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                {course.title}
              </h2>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {course.description}
              </p>

              <button className="mt-5 w-full bg-yellow-500 text-white py-2 rounded-lg font-medium hover:bg-yellow-600 transition">
                View Course →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
