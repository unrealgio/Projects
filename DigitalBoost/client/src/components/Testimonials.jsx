import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    <section id="depoimentos" className="bg-[#000A26] px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Depoimentos de quem já deu o Boost no Digital!
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-white">
          Depoimentos reais de pessoas e empresas que confiaram na Digital
          Boost.
        </p>

        <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
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
                {testimonial.comment}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Seção CTA inspirada no Figma */}
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 rounded-2xl bg-[#001437] px-6 py-12 text-white lg:flex-row">
          <h3 className="text-center text-4xl leading-tight font-extrabold lg:text-left">
            O Boost que você <br /> precisa no digital
          </h3>

          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <p className="max-w-md text-sm">
              Explore no digital hoje, com a Digital Boost: A revolução nos
              ganhos de seu negócio, transforme sua experiência em um clique!
            </p>

            <button className="font-inter flex items-center gap-2 font-semibold text-white transition-all hover:underline">
              <ArrowRight className="h-7 w-7 rounded-full bg-white p-1 text-blue-500" />
              <Link to="/contato">Saiba mais!</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
