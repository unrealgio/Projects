import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Criação de Sites",
    description:
      "Desenvolvemos sites rápidos, responsivos e com design personalizado.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Marketing Digital",
    description:
      "Atraia muito mais clientes com estratégias digitais inteligentes e eficientes  de marketing, focadas em crescimento e resultados reais.",
    image:
      "https://img.freepik.com/fotos-gratis/mulher-de-alto-angulo-segurando-smartphone_23-2150208257.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&semt=ais_hybrid&w=740",
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Alcance e engaje seu público nas plataformas certas com conteúdo estratégico.",
    image:
      "https://img.freepik.com/fotos-gratis/conceito-de-marketing-de-midia-social-para-marketing-com-aplicativos_23-2150063138.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&semt=ais_hybrid&w=740",
  },
  {
    title: "Soluções Personalizadas",
    description:
      "Criamos sistemas sob medida que se adaptam exatamente às suas necessidades.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#000a26]">
          Do zero ao primeiro pedido: nós construímos tudo pra você vender!
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-500">
          Soluções digitais para transformar seu negócio e gerar resultados
          reais.
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
              <div className="bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
