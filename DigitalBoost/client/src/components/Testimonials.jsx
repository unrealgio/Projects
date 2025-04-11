import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Souza",
    role: "CEO - Loja Virtual AnaFashion",
    comment:
      "A equipe da Digital Boost foi essencial para alavancar nossas vendas com um site incrível e estratégias certeiras de marketing digital.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Henrique",
    role: "Fundador - Startup TechMove",
    comment:
      "Rápidos, eficientes e super criativos. Entregaram muito além do esperado. Recomendo totalmente!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Juliana Mendes",
    role: "Gestora - JM Estética",
    comment:
      "O novo site ficou maravilhoso e nossos agendamentos aumentaram significativamente. Obrigada pelo profissionalismo!",
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
    <section id="depoimentos" className="py-20 bg-[#000A26] px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Depoimentos de quem já deu o Boost no Digital!
        </h2>
        <p className="text-white mb-12 max-w-2xl mx-auto">
          Depoimentos reais de pessoas e empresas que confiaram na Digital
          Boost.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              {/* Estrelas no topo */}
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm italic">
                {testimonial.comment}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Seção CTA inspirada no Figma */}
        <div className="bg-[#001437] rounded-2xl text-white px-6 py-12 flex flex-col lg:flex-row justify-between items-center gap-8 max-w-6xl mx-auto">
          <h3 className="text-4xl font-extrabold leading-tight text-center  lg:text-left">
            O Boost que você <br /> precisa no digital
          </h3>

          <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            <p className="text-sm max-w-md">
              Explore no digital hoje, com a Digital Boost: A revolução nos
              ganhos de seu negócio, transforme sua experiência em um clique!
            </p>

            <button className="flex items-center gap-2 text-white font-semibold font-inter hover:underline transition-all">
              <ArrowRight className="text-blue-500 bg-white rounded-full w-7 h-7 p-1" />
              <Link to='/contato'>Saiba mais!</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
