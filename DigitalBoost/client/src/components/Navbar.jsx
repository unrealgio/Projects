import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <RouterLink to="/" className="text-2xl font-bold text-blue-600">
          Digital Boost
        </RouterLink>

        {/* Links desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-blue-600 relative group cursor-pointer"
            >
              Home
              <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="servicos"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-blue-600 relative group cursor-pointer"
            >
              Serviços
              <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="depoimentos"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-blue-600 relative group cursor-pointer"
            >
              Depoimentos
              <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </ScrollLink>
          </li>
          <li>
            <RouterLink
              to="/contato"
              className="hover:text-blue-600 relative group cursor-pointer"
            >
              Contato
              <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </RouterLink>
          </li>
        </ul>

        {/* Botão desktop */}
        <ScrollLink
          to="contato"
          smooth={true}
          duration={500}
          offset={-80}
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Comece Agora!
        </ScrollLink>

        {/* Ícone mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 transition duration-300"
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Mobile com animação */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-white shadow-md md:hidden overflow-hidden z-40"
            >
              <ul className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
                <li>
                  <ScrollLink
                    to="top"
                    smooth={true}
                    duration={500}
                    offset={+80}
                    className="cursor-pointer"
                    onClick={closeMenu}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="servicos"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer"
                    onClick={closeMenu}
                  >
                    Serviços
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="depoimentos"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer"
                    onClick={closeMenu}
                  >
                    Depoimentos
                  </ScrollLink>
                </li>
                <li>
                  <RouterLink to="/contato" onClick={closeMenu}>
                    Contato
                  </RouterLink>
                </li>
                <li>
                  <ScrollLink
                    to="contato"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition block text-center cursor-pointer"
                    onClick={closeMenu}
                  >
                    Comece Agora
                  </ScrollLink>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
