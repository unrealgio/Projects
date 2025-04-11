import React from "react";
import { Globe, LineChart, Smartphone, Code } from "lucide-react";

const services = [
  {
    title: "Criação de Sites",
    description:
      "Desenvolvemos sites rápidos, responsivos e com design personalizado.",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Marketing Digital",
    description:
      "Atraia mais clientes com estratégias inteligentes de marketing online.",
    icon: <LineChart className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Gestão de Redes Sociais",
    description: "Alcance e engaje seu público nas plataformas certas.",
    icon: <Smartphone className="w-8 h-8 text-pink-600" />,
  },
  {
    title: "Soluções Personalizadas",
    description: "Desenvolvimento de sistemas sob medida para sua necessidade.",
    icon: <Code className="w-8 h-8 text-purple-600" />,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Nossos Serviços
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Soluções digitais para transformar seu negócio e gerar resultados
          reais.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
