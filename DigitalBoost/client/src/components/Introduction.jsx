import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-[#001C45] px-4 py-16 pt-[80px] text-white sm:px-6 md:px-10"
    >
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Texto */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl leading-tight font-bold text-[#B8CAFF] sm:text-4xl md:text-5xl lg:text-6xl">
            Você não precisa de mais um site. <br />
            <span className="text-white">
              Você precisa de uma máquina de vendas!
            </span>
          </h1>
          <p className="mt-6 text-sm text-[#B5CCFF] sm:text-base md:text-lg">
            Fora do digital, seu negócio está perdendo espaço. Não deixe mais
            oportunidades escaparem. Posicione-se no ambiente digital agora!
          </p>
          <Link to="/contato">
            <button className="mt-6 w-full cursor-pointer rounded-lg bg-[#7CA6FF] px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-[#FEBD00] sm:w-auto sm:px-8 sm:py-4 sm:text-2xl">
              Dê o Boost!
            </button>
          </Link>
        </div>

        {/* video */}
        <div className="relative mx-auto aspect-video h-[650px] w-full max-w-lg overflow-hidden rounded-[30px] bg-black md:rounded-[60px]">
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <source src="/videos/BoostAnimation.mp4" type="video/mp4" />
            video não suportado
          </motion.video>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
