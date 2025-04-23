import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // efeito de rolagem para mudar a cor do bg da navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? "bg-white text-[#FEBD00] shadow-md"
          : "bg-[#ffffff00] text-white"
      }`}
    >
      {/* icone whatsapp */}
      <a
        href="https://wa.me/558481734763"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-50 flex items-center justify-center gap-1 rounded-full bg-green-500 px-3 py-3 text-center font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-600 md:right-6 md:bottom-6"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="hidden md:inline">Quero vender mais agora!</span>
      </a>

      <nav className="max-w-8xl relative mx-auto flex h-[80px] items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <RouterLink
          to="/"
          className={`absolute left-5 flex items-center text-lg sm:text-2xl font-bold ${
            isScrolled ? "text-[#FEBD00]" : "text-white"
          }`}
        >
          <img className="w-8 sm:w-12" src="/img/logo.png" alt="Logo Digital Boost" />
          <span className="p-2 font-bold">Digital Boost</span>
        </RouterLink>

        {/* menu */}
        <ul
          className={`absolute left-1/2 hidden -translate-x-1/2 space-x-6 sm:space-x-10 font-medium md:flex ${
            isScrolled ? "text-[#FEBD00]" : "text-white"
          }`}
        >
          {[
            { to: "home", label: "Início" },
            { to: "about", label: "Quem Somos" },
            { to: "challenge", label: "O Desafio" },
            { to: "solution", label: "A solução" },
            { to: "services", label: "Nossos Serviços" },
            { to: "depoimentos", label: "Depoimentos" },
          ].map((item) => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="font-bold text-[#0142FF]"
                className="group relative cursor-pointer hover:text-[#febd00]"
              >
                {item.label}
                <span
                  className={`block h-0.5 origin-left scale-x-0 transition-transform group-hover:scale-x-100 ${
                    isScrolled ? "bg-[#FEBD00]" : "bg-white"
                  }`}
                />
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* botão fale com a gente*/}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute right-5 hidden md:flex"
        >
          <RouterLink
            to="/contato"
            className={`inline-block rounded-lg px-4 py-2 text-white shadow-md transition-colors ${
              isScrolled
                ? "bg-[#FEBD00] hover:bg-[#0142FF]"
                : "bg-[#FEBD00] hover:bg-[#0142FF]"
            }`}
          >
            Fale com a Gente
          </RouterLink>
        </motion.div>

        {/* botão mobile menu */}
        <button
          onClick={toggleMenu}
          className="absolute right-4 text-gray-700 transition duration-300 md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* menu mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 z-40 w-3/4 h-full bg-white shadow-md md:hidden"
            >
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-gray-700"
                aria-label="Fechar Menu"
              >
                <X size={28} />
              </button>
              <ul className="flex flex-col space-y-6 p-8 font-medium text-gray-700">
                {[
                  { to: "home", label: "Início" },
                  { to: "about", label: "Quem Somos" },
                  { to: "challenge", label: "O Desafio" },
                  { to: "solution", label: "A solução" },
                  { to: "services", label: "Nossos Serviços" },
                  { to: "depoimentos", label: "Depoimentos" },
                ].map((item) => (
                  <li key={item.to}>
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="cursor-pointer"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;