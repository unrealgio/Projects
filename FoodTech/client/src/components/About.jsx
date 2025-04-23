import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaProjectDiagram, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="bg-[#dadada] py-12 px-4 sm:py-16 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* imagem */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://img.freepik.com/fotos-premium/homem-de-meia-idade-se-sentindo-feliz-e-apontando-para-si-mesmo-com-um-animado-conceito-de-chef-e-quadro-negro_1194-343755.jpg?w=900"
            alt="About Us"
            className="w-full max-w-sm sm:max-w-md lg:max-w-full rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        {/* conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000A26] mb-4">
            Conheça a Digital Boost
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FEBD00] mb-4">
            Transformamos Sonhos em Realidade Digital!
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            A Digital Boost é uma foodtech criada para impulsionar o setor
            gastronômico com tecnologia, estratégia e criatividade. Oferecemos
            soluções integradas que ajudam bares e restaurantes a crescer de
            forma eficiente e sustentável. Não entregamos apenas ferramentas,
            entregamos inteligência. Combinamos dados, branding e automação para
            transformar restaurantes em negócios digitais de alto desempenho.
          </p>
          <Link
            to="/contato"
            className="inline-block w-full sm:w-auto cursor-pointer bg-[#000A26] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:bg-[#0142FF]"
          >
            Vamos conversar?
          </Link>
        </motion.div>
      </div>

      {/* cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-[#FEBD00] p-6 rounded-lg text-center text-white shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-[#000A26]"
        >
          <FaAward className="text-3xl sm:text-4xl mb-4 text-[#000A26] mx-auto" />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">EXPERIÊNCIA</h4>
          <p className="text-sm sm:text-base text-[#000a26]">
            Mais de 2 anos de experiência no mercado.
          </p>
        </motion.div>

        {/* card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="bg-[#000A26] p-6 rounded-lg text-center text-white shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-[#FEBD00]"
        >
          <FaProjectDiagram className="text-3xl sm:text-4xl mb-4 text-[#FEBD00] mx-auto" />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">PROJETOS ENTREGUES</h4>
          <p className="text-sm sm:text-base text-[#FEBD00]">
            Mais de 50 projetos entregues para clientes satisfeitos.
          </p>
        </motion.div>

        {/* card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="bg-[#FEBD00] p-6 rounded-lg text-center text-white shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-[#000A26]"
        >
          <FaHandshake className="text-3xl sm:text-4xl mb-4 text-[#000A26] mx-auto" />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">EMPRESAS FIDELIZADAS</h4>
          <p className="text-sm sm:text-base text-[#000a26]">
            Mais de 100 empresas atendidas com sucesso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;