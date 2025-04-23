import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://img.freepik.com/fotos-gratis/cafeteria-com-efeito-borrado_23-2148164705.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&semt=ais_hybrid&w=740",
    title: "Eficiência",
    subtitle: "Reduza desperdícios e otimize sua operação.",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/fotos-gratis/borrao-de-luz-do-cliente-pessoas-estilo-de-vida_1203-4032.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&semt=ais_hybrid&w=740",
    title: "Identidade",
    subtitle: "Construa uma marca forte e reconhecida.",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/fotos-gratis/lampadas-penduradas-no-teto_1203-805.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&semt=ais_hybrid&w=740",
    title: "Crescimento",
    subtitle: "Atraia mais clientes e aumente as vendas.",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/fotos-gratis/abstratos-blur-cafe-loja_1203-8295.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&semt=ais_hybrid&w=740",
    title: "Decisão Estratégica",
    subtitle: "Use dados reais para tomar decisões certeiras.",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/fotos-gratis/restaurante-turva-em-shopping_1258-1.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&semt=ais_hybrid&w=740",
    title: "Engajamento",
    subtitle: "Conecte-se com seu público e fidelize clientes.",
  },
];

const Solution = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para avançar para o próximo slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Função para voltar para o slide anterior
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay para dispositivos móveis
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Alterne os slides a cada 5 segundos

    // Limpe o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="solution"
      className="relative h-[600px] sm:h-[700px] lg:h-[800px] w-full overflow-hidden"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Imagem de Fundo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          {/* Camada Opaca */}
          <div className="absolute inset-0 bg-[#00000073] bg-opacity-50"></div>
          {/* Texto Centralizado */}
          <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl max-w-md sm:max-w-lg drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Botões de Navegação */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-10 top-1/2 transform -translate-y-1/2 bg-[#FEBD00] bg-opacity-80 text-white p-3 sm:p-4 rounded-full hover:bg-opacity-100 transition z-20 hover:scale-110 hover:bg-[#000A26] hover:border hover:border-[#FEBD00] cursor-pointer hidden sm:block"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-10 top-1/2 transform -translate-y-1/2 bg-[#FEBD00] bg-opacity-80 text-white p-3 sm:p-4 rounded-full hover:bg-opacity-100 transition z-20 hover:scale-110 hover:bg-[#000A26] hover:border hover:border-[#FEBD00] cursor-pointer hidden sm:block"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores de Progresso */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
              index === currentSlide ? "bg-[#FEBD00]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Solution;