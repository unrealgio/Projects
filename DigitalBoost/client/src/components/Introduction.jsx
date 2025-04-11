import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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

  // AutoPlay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // 5 segundos

    return () => clearInterval(interval); // cleanup
  }, [index]); // reinicia quando o index muda

  return (
    <section
      id="home"
      className=" bg-[#001C45] text-white min-h-screen flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            O Novo Mundo <br /> no Digital Boost
            <span className="text-[#ffffff]">!</span>
          </h1>
          <p className="text-[#B5CCFF] text-base md:text-lg mt-6">
            Fora do digital, seu negócio está perdendo espaço. Não deixe mais
            oportunidades escaparem. Posicione-se no ambiente digital agora!
          </p>
          <button className="mt-6 bg-[#7CA6FF] text-white font-semibold text-2xl px-8 py-4 rounded-lg hover:bg-[#6A92E0] transition duration-300">
            <Link to="/contato">Dê o Boost!</Link>
          </button>
        </div>

        {/* Carrossel */}
        <div className="relative w-full max-w-xl h-[450px] rounded-[60px] overflow-hidden mx-auto">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[60px]"
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
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 z-10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 z-10"
          >
            <ChevronRight />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
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
