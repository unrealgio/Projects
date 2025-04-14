import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-6 py-10 text-gray-700">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        {/* Logo + Descrição */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-600">Digital Boost</h2>
          <p className="mt-2 max-w-sm text-sm">
            Impulsionando empresas no mundo digital com soluções inteligentes e
            personalizadas.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#servicos" className="transition hover:text-blue-600">
                Serviços
              </a>
            </li>
            <li>
              <a href="#depoimentos" className="transition hover:text-blue-600">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contato" className="transition hover:text-blue-600">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Siga-nos</h3>
          <div className="flex gap-4">
            <a
              href="https://web.facebook.com/giozzzz1"
              aria-label="Facebook"
              className="transition hover:text-blue-600"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/odigitalboost/"
              aria-label="Instagram"
              className="transition hover:text-pink-500"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/giovanni-felipe-dev/"
              aria-label="LinkedIn"
              className="transition hover:text-blue-500"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Linha final */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Digital Boost. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
