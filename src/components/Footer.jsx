import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-yellow-300 py-10 mt-0 shadow-[0_-10px_30px_rgba(255,223,71,0.15)]">
      {/* Top soft glow to blend with contact section */}
      <div className="absolute -top-6 left-0 right-0 h-8 bg-gradient-to-b from-yellow-400/20 to-transparent blur-md opacity-50"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-sm text-center md:text-left leading-relaxed">
          <p className="text-yellow-400 font-semibold text-lg">Orthodox Student Platform</p>
          <p className="text-gray-400 text-sm">
            Empowering faith, unity, and growth among Orthodox students.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            &copy; {new Date().getFullYear()} Orthodox Student Platform — All Rights Reserved.
          </p>
        </div>

        {/* Right Section - Navigation + Socials */}
        <div className="flex flex-col items-center md:items-end gap-3">
          {/* Links */}
          <div className="flex gap-5">
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            {[
              { Icon: FaFacebookF, link: "https://facebook.com" },
              { Icon: FaInstagram, link: "https://instagram.com" },
              { Icon: FaYoutube, link: "https://youtube.com" },
              { Icon: FaTiktok, link: "https://tiktok.com" },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-yellow-400/10 border border-yellow-500 hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-125"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 opacity-40"></div>
    </footer>
  );
}
