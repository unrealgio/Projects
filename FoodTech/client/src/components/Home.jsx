import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-premium/uma-cozinha-moderna-com-chefs-trabalhando-em-um-tablet-exibindo-dados-e-ingredientes-frescos-nas-proximidades_705052-18506.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&w=740')",
      }}
    >
      {/* overlay escurecido */}
      <div className="absolute inset-0 bg-[#000000a6] bg-opacity-50"></div>

      {/* conteúdo principal */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4 md:px-8">
        {/* título principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Transformamos{" "}
          <span className="text-[#FEBD00] font-semibold">cardápios</span> <br />
          em{" "}
          <span className="text-[#FEBD00] font-semibold">
            experiências digitais
          </span>{" "}
          <br /> que aumentam vendas.
        </h1>

        {/* botão escolha seu cardápio */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="mt-8 inline-block rounded-lg bg-[#FEBD00] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg transition hover:bg-[#0142FF]"
        >
          Escolha seu cardápio!
        </motion.a>

        {/* imagem dispositivos */}
        <div className="mt-8 sm:mt-12">
          <img
            src="/img/devices.png"
            alt="Dispositivos com cardápios digitais"
            className="h-64 sm:h-72 md:h-80 lg:h-96 w-auto object-contain"
          />
        </div>

        {/* texto final */}
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Conectando restaurantes ao futuro,{" "}
          <span className="text-[#FEBD00] font-semibold">
            um prato de cada vez.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Home;