import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Souza",
    role: "Chef - Restaurante Ana Gourmet",
    comment:
      "A Digital Boost trouxe um toque especial para o nosso negócio. Nosso site agora reflete a essência e a paixão pela gastronomia.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Henrique",
    role: "Proprietário - Bistrô TechMove",
    comment:
      "Foi uma parceria incrível! Conseguimos aumentar as reservas e atrair novos clientes com um site maravilhoso.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Juliana Mendes",
    role: "Gerente de Marketing - JM Gastronomia",
    comment:
      "A equipe é fantástica. Criatividade e eficiência em cada detalhe. Recomendo a Digital Boost para transformar negócios!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-[#000A26] px-4 py-12 sm:py-16 sm:px-6 lg:px-20 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FEBD00]">
          O que nossos clientes dizem!
        </h2>
        <p className="mx-auto mb-12 max-w-md sm:max-w-xl text-sm sm:text-base text-gray-300">
          Histórias reais de pessoas que elevaram seus negócios com a Digital Boost.
        </p>

        {/* Cards de Depoimentos */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border-2 border-[#FEBD00] bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              {/* Estrelas no topo */}
              <div className="mb-3 flex gap-1 justify-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Informação do Usuário */}
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-sm sm:text-base font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Comentário */}
              <p className="text-xs sm:text-sm text-gray-600 italic">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Seção CTA */}
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 p-6 rounded-2xl bg-[#FEBD00] text-[#3C0142]">
          <h3 className="text-center text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
            Transforme o seu negócio <br /> com a Digital Boost! 🚀
          </h3>

          <div className="flex flex-col items-center lg:items-start gap-4">
            <p className="text-sm sm:text-base max-w-md text-center lg:text-left">
              Não fique para trás! Descubra como podemos ajudar a elevar o seu restaurante ou negócio gastronômico.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 font-semibold text-[#3C0142] transition hover:text-[#0142FF]"
            >
              <ArrowRight className="h-6 w-6 rounded-full cursor-pointer bg-[#3C0142] p-1 text-[#FEBD00]" />
              <Link to="/contato">Fale Conosco!</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;