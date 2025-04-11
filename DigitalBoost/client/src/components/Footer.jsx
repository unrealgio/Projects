import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo + Descrição */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-600">Digital Boost</h2>
          <p className="mt-2 text-sm max-w-sm">
            Impulsionando empresas no mundo digital com soluções inteligentes e
            personalizadas.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#servicos" className="hover:text-blue-600 transition">
                Serviços
              </a>
            </li>
            <li>
              <a href="#depoimentos" className="hover:text-blue-600 transition">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-blue-600 transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Siga-nos</h3>
          <div className="flex gap-4">
            <a
              href="https://web.facebook.com/giozzzz1"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/odigitalboost/"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/giovanni-felipe-dev/"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Linha final */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Digital Boost. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
