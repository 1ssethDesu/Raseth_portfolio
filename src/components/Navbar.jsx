import { useState } from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-10 bg-gray-900">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-white text-[20px] font-bold">Raseth</h1>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-5 text-white text-lg items-center">
        <a href="#hero" className="hover:text-gray-300 transition-colors duration-300">Home</a>
        <a href="#about" className="hover:text-gray-300 transition-colors duration-300">About</a>
        <a href="#technologies" className="hover:text-gray-300 transition-colors duration-300">Technologies</a>
        <a href="#experience" className="hover:text-gray-300 transition-colors duration-300">Experience</a>
        <a href="#projects" className="hover:text-gray-300 transition-colors duration-300">Projects</a>
        <a href="#contact" className="hover:text-gray-300 transition-colors duration-300">Contact</a>
      </div>

      {/* Social Media Icons (Desktop) */}
      <div className="hidden md:flex gap-3 text-2xl items-center">
        <a href="https://www.linkedin.com/in/chhoraseth-chhort-311823210/"
           className="hover:text-[#0077B5] transition-colors duration-300">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/stoung.meas/"
           className="hover:text-blue-600 transition-colors duration-300">
          <FaFacebook />
        </a>
        <a href="https://github.com/1ssethDesu"
           className="hover:text-gray-800 transition-colors duration-300">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/cideus_/"
           className="hover:text-pink-600 transition-colors duration-300">
          <FaInstagram />
        </a>
      </div>

      {/* Menu Icon (Mobile) */}
      <div className="md:hidden text-white text-2xl cursor-pointer z-50" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-5 text-white text-lg">
          <a href="#hero" className="hover:text-gray-600 transition-colors duration-300" onClick={toggleMobileMenu}>Home</a>
          <a href="#about" className="hover:text-gray-600 transition-colors duration-300" onClick={toggleMobileMenu}>About</a>
          <a href="#technologies" className="hover:text-gray-600 transition-colors duration-300" onClick={toggleMobileMenu}>Technologies</a>
          <a href="#experience" className="hover:text-gray-600 transition-colors duration-300" onClick={toggleMobileMenu}>Experience</a>
          <a href="#projects" className="hover:text-gray-600 transition-colors duration-300" onClick={toggleMobileMenu}>Projects</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors duration-300" onClick={toggleMobileMenu}>Contact</a>
          {/* Mobile Social Media Icons */}
          <div className="flex gap-5 mt-4">
            <a href="https://www.linkedin.com/in/chhoraseth-chhort-311823210/"
               className="hover:text-[#0077B5] transition-colors duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href="https://www.facebook.com/stoung.meas/"
               className="hover:text-blue-600 transition-colors duration-300">
              <FaFacebook size={28} />
            </a>
            <a href="https://github.com/1ssethDesu"
               className="hover:text-gray-800 transition-colors duration-300">
              <FaGithub size={28} />
            </a>
            <a href="https://www.instagram.com/cideus_/"
               className="hover:text-pink-600 transition-colors duration-300">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
