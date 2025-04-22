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
  visible: (i) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    };
  },
};

const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-[#000A26] px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#FEBD00]">
          O que nossos clientes dizem!
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-300">
          Histórias reais de pessoas que elevaram seus negócios com a Digital Boost.
        </p>

        <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              <div className="mb-3 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <div className="mb-4 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 italic">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Seção CTA */}
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 rounded-2xl bg-[#FEBD00] px-6 py-12 text-[#3C0142] lg:flex-row">
          <h3 className="text-center text-4xl font-extrabold leading-tight lg:text-left">
            Transforme o seu negócio <br /> com a Digital Boost! 🚀
          </h3>

          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <p className="max-w-md text-lg text-[white]">
              Não fique para trás! Descubra como podemos ajudar a elevar o seu restaurante ou negócio gastronômico.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 font-semibold text-[#3C0142] transition hover:text-[#0142FF]"
            >
              <ArrowRight className="h-7 w-7 rounded-full cursor-pointer bg-[#3C0142] p-1 text-[#FEBD00]" />
              <Link to="/contato">Fale Conosco!</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;