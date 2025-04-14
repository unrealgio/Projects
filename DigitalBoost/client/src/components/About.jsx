import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const aboutItems = [
  {
    year: "2023",
    title: "Nasce a Digital Boost",
    description:
      "Começamos com o sonho de transformar negócios através da presença digital.",
    image:
      "https://img.freepik.com/fotos-gratis/grupo-de-pessoas-trabalhando-no-plano-de-negocios-em-um-escritorio_1303-15773.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&semt=ais_hybrid&w=740",
  },
  {
    year: "2023",
    title: "Nossa Equipe",
    description:
      "Formamos um time multidisciplinar e engajado para entregar soluções criativas e eficazes aos nossos clientes.",
    image:
      "https://img.freepik.com/fotos-gratis/agencia-de-marketing-autentica-pequena-e-jovem_23-2150167428.jpg?t=st=1744601132~exp=1744604732~hmac=3a15c5b0ac0d1650cd5865abc9d557be6c05306be5d02db45e608aae1e0b4a0a&w=996",
  },
  {
    year: "2024",
    title: "Expansão de Serviços",
    description:
      "Incluímos branding, performance em e-commerce e automação de marketing.",
    image:
      "https://img.freepik.com/fotos-gratis/pessoa-na-frente-do-computador-trabalhando-html_23-2150040428.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&semt=ais_hybrid&w=740",
  },
  {
    year: "2025",
    title: "Time em Crescimento",
    description:
      "Nosso time aumentou e passamos a atender clientes em todo o Brasil.",
    image:
      "https://img.freepik.com/fotos-gratis/mulher-de-tiro-medio-trabalhando-no-escritorio-de-uma-agencia-de-viagens_23-2150433346.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&semt=ais_hybrid&w=740",
  },
];

const Timeline = () => {
  return (
    <section
      id="sobre"
      className="bg-[#000a26] px-4 py-20 text-white sm:px-8 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-4xl font-bold sm:text-5xl"
        >
          Não somos só uma agência.{" "}
          <span className="text-[#0142FF]">
            Nós somos especialistas em E-Commerce.
          </span>
        </motion.h2>

        <p className="mb-10 text-lg text-blue-200">
          A Digital Boost foi eleita uma das 15 startups de tecnologia mais
          promissoras do Brasil pelo Sebrae. Somos parceiros oficiais da
          Nuvemshop, com foco total em performance, vendas e crescimento
          digital. Nosso compromisso é simples: montar sua loja do jeito certo e
          te fazer vender o quanto antes.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {aboutItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl bg-white text-[#000a26] shadow-lg"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-[#FEBD00] px-4 py-1 text-sm font-bold text-white">
                    {item.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Timeline;
