import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed z-50 w-full bg-white shadow-md">
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/558481734763"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 flex items-center justify-center gap-1 rounded-full bg-green-500 px-3 py-3 text-center font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
      >
        <FaWhatsapp className="text-2xl" />
        Quero vender mais agora!
      </a>

      <nav className="max-w-8xl relative mx-auto flex h-[80px] items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <RouterLink
          to="/"
          className="absolute left-5 flex items-center text-2xl font-bold text-blue-600"
        >
          <img className="w-12" src="/img/logo.png" alt="Logo Digital Boost" />
          <span className="p-2 font-bold">Digital Boost</span>
        </RouterLink>

        {/* Menu centralizado */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 space-x-10 font-medium text-gray-700 md:flex">
          {[
            { to: "home", label: "Início" },
            { to: "ecommerce", label: "Por que E-commerce?" },
            { to: "sobre", label: "Quem Somos" },
            { to: "servicos", label: "Serviços" },
            { to: "solucao", label: "Solução Boost" },
            { to: "depoimentos", label: "Depoimentos" },
          ].map((item) => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="group relative cursor-pointer hover:text-[#febd00]"
              >
                {item.label}
                <span className="block h-0.5 origin-left scale-x-0 bg-[#febd00] transition-transform group-hover:scale-x-100" />
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Botão "Fale com a gente" */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute right-5 hidden md:flex"
        >
          <RouterLink
            to="/contato"
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md transition-colors hover:bg-blue-700"
          >
            Fale com a Gente
          </RouterLink>
        </motion.div>

        {/* Botão mobile menu */}
        <button
          onClick={toggleMenu}
          className="absolute right-4 text-gray-700 transition duration-300 md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 z-40 w-full overflow-hidden bg-white shadow-md md:hidden"
            >
              <ul className="flex flex-col space-y-3 p-4 font-medium text-gray-700">
                {[
                  { to: "home", label: "Início" },
                  { to: "ecommerce", label: "Por que E-commerce" },
                  { to: "servicos", label: "Serviços" },
                  { to: "solucao", label: "Solução Boost" },
                  { to: "sobre", label: "Quem Somos" },
                  { to: "duvidas", label: "Dúvidas" },
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

                <li>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <RouterLink
                      to="/contato"
                      onClick={closeMenu}
                      className="block rounded-lg bg-blue-600 px-4 py-2 text-center text-white shadow-md transition hover:bg-blue-700"
                    >
                      Fale com a Gente
                    </RouterLink>
                  </motion.div>
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
