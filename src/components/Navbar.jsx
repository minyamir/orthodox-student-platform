import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        scroller.scrollTo(id, { smooth: true, offset: -70, duration: 700 });
      }, 200);
    } else {
      scroller.scrollTo(id, { smooth: true, offset: -70, duration: 700 });
    }
    setTimeout(() => setOpen(false), 300);
  };

  const goHome = () => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo("hero", { smooth: true, offset: -70, duration: 700 });
      setOpen(false);
    }, 200);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black/90 z-50 backdrop-blur-sm shadow-md">
      <div className="flex items-center justify-between px-4 md:max-w-7xl md:mx-auto w-full h-full relative">

        {/* Logo + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <div onClick={goHome} className="flex items-center cursor-pointer">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
            />
            <div className="ml-2">
              <div className="text-yellow-400 font-bold text-lg md:text-2xl">
                Orthodox Platform
              </div>
              <div className="text-xs text-gray-300 -mt-1 hidden md:block">
                For Orthodox students — Connect • Learn • Serve
              </div>
            </div>
          </div>

          {/* Mobile Hamburger Inline */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-17 text-yellow-400 text-3xl focus:outline-none"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-white">
          <button onClick={goHome} className="hover:text-yellow-400">
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-yellow-400"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-yellow-400"
          >
            Contact
          </button>
          <Link to="/register" className="hover:text-yellow-400">
            Register
          </Link>
          <Link to="/login" className="hover:text-yellow-400">
            Login
          </Link>
        </ul>
      </div>

      {/* Mobile Sidebar Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-64 bg-black/95 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } shadow-lg`}
      >
        <div className="flex flex-col mt-20 px-6 gap-6 text-lg font-medium">
          <button
            onClick={goHome}
            className="hover:text-yellow-400 py-2 rounded-lg transition-colors duration-300 hover:bg-yellow-500/10 text-left"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-yellow-400 py-2 rounded-lg transition-colors duration-300 hover:bg-yellow-500/10 text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-yellow-400 py-2 rounded-lg transition-colors duration-300 hover:bg-yellow-500/10 text-left"
          >
            Contact
          </button>
          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400 py-2 rounded-lg transition-colors duration-300 hover:bg-yellow-500/10 text-left"
          >
            Register
          </Link>
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400 py-2 rounded-lg transition-colors duration-300 hover:bg-yellow-500/10 text-left"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
