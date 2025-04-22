import React from "react";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#000A26] to-[#FEBD00] px-6 py-10 text-white">
      <div className="mx-auto max-w-screen-lg flex flex-col justify-between gap-8 md:flex-row">
        {/* Sobre Nós */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <img
              src="/img/logo.png"
              alt="Logo Digital Boost"
              className="w-8 h-8 object-contain"
            />
            <h2 className="text-2xl font-bold text-[#FEBD00]">Digital Boost</h2>
          </div>
          <p className="mt-2 max-w-sm text-sm text-gray-400">
            Impulsionando empresas no mundo digital com soluções inteligentes e
            personalizadas.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-[#FEBD00]">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#servicos" className="flex items-center gap-2 transition hover:text-[#FEBD00]">
                <span>→</span> Serviços
              </a>
            </li>
            <li>
              <a href="#depoimentos" className="flex items-center gap-2 transition hover:text-[#FEBD00]">
                <span>→</span> Depoimentos
              </a>
            </li>
            <li>
              <a href="#contato" className="flex items-center gap-2 transition hover:text-[#FEBD00]">
                <span>→</span> Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-[#FEBD00]">Siga-nos</h3>
          <div className="flex gap-4">
            <a
              href="https://web.facebook.com/giozzzz1"
              aria-label="Facebook"
              className="transition hover:text-blue-600 hover:scale-110"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/odigitalboost/"
              aria-label="Instagram"
              className="transition hover:text-pink-500 hover:scale-110"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/giovanni-felipe-dev/"
              aria-label="LinkedIn"
              className="transition hover:text-blue-500 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-[#000A26]">
        © {new Date().getFullYear()} Digital Boost. Todos os direitos
        reservados. <br />
        <span className="text-[white]">Desenvolvido por Giovanni Felipe</span>
      </div>

      {/* Botão de Voltar ao Topo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 left-4 bg-[#000a26] text-[#FEBD00] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#0142FF] hover:text-white transition z-50"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;