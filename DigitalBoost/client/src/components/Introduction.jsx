import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// imagens carrossel
const images = [
  "/img/example1.jpg",
  "/img/example2.jpg",
  "/img/example3.jpg",
  "/img/example4.jpg",
  "/img/example5.jpg",
];

const Introduction = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // AutoPlay carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // 5 segundos

    return () => clearInterval(interval); // cleanup
  }, [index]); // reinicia quando o index muda

  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-[#001C45] px-6 py-16 text-white"
    >
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Texto */}
        <div>
          <h1 className="text-4xl leading-tight font-bold text-[#B8CAFF] md:text-5xl lg:text-6xl">
            Você não precisa de mais um site. <br />
            <span className="text-white">
              Você precisa de uma máquina de vendas!
            </span>
          </h1>
          <p className="mt-6 text-base text-[#B5CCFF] md:text-lg">
            Fora do digital, seu negócio está perdendo espaço. Não deixe mais
            oportunidades escaparem. Posicione-se no ambiente digital agora!
          </p>
          <button className="mt-6 rounded-lg bg-[#7CA6FF] px-8 py-4 text-2xl font-semibold text-white transition duration-300 hover:bg-[#FEBD00]">
            <Link to="/contato">Dê o Boost!</Link>
          </button>
        </div>

        {/* Carrossel */}
        <div className="relative mx-auto h-[450px] w-full max-w-xl overflow-hidden rounded-[60px]">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="absolute top-0 left-0 h-full w-full rounded-[60px] object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: i === index ? 1 : 0,
                scale: i === index ? 1 : 1.05,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ zIndex: i === index ? 1 : 0 }}
            />
          ))}

          {/* Navegação manual */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
          >
            <ChevronRight />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-[#7CA6FF]" : "bg-[#AAB8D0]"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
