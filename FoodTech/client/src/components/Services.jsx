import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaChartBar,
  FaHandshake,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import { SiMicrostrategy } from "react-icons/si";
import { MdRestaurantMenu, MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#00173F] py-16 px-6 md:px-12 lg:px-20 text-white"
    >
      <div className="max-w-screen-lg mx-auto">
        {/* título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FEBD00] mb-4">
            Ecossistema Digital Boost
          </h2>
          <p className="text-lg text-gray-200">
            Aqui estão os serviços que oferecemos para ajudar a sua empresa a
            crescer e prosperar no mundo digital.
          </p>
        </div>

        {/* cards de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* card 1 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="bg-white text-[#00173F] p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-[#FEBD00]"
          >
            <div className="flex flex-col items-center text-center">
              <SiMicrostrategy className="text-4xl text-[#0142FF] mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Consultoria Estratégica
              </h4>
              <p className="text-gray-700">
                Ajudamos você a identificar oportunidades de crescimento e
                inovação.
              </p>
            </div>
          </motion.div>

          {/* card 2 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="bg-[#00173F] text-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 border-2 border-[#FEBD00]"
          >
            <div className="flex flex-col items-center text-center">
              <FaLightbulb className="text-4xl text-[#FEBD00] mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Branding e Identidade Visual
              </h4>
              <p className="text-gray-300">
                Transforme seu restaurante em uma marca memorável.
              </p>
            </div>
          </motion.div>

          {/* card 3 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="bg-white text-[#00173F] p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-[#FEBD00]"
          >
            <div className="flex flex-col items-center text-center">
              <MdRestaurantMenu className="text-4xl text-[#0142FF] mb-4" />
              <h4 className="text-xl font-semibold mb-2">Cardápio Digital</h4>
              <p className="text-gray-700">
                Atualize seu menu em tempo real, reduza custos e ofereça uma
                experiência personalizada.
              </p>
            </div>
          </motion.div>

          {/* card 4 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="bg-[#00173F] text-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 border-2 border-[#FEBD00]"
          >
            <div className="flex flex-col items-center text-center">
              <MdDashboard className="text-4xl text-[#FEBD00] mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Ferramentas de BI & Dashboards
              </h4>
              <p className="text-gray-300">
                Transforme dados em insights valiosos para decisões
                estratégicas.
              </p>
            </div>
          </motion.div>

          {/* card 5 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="bg-white text-[#00173F] p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-[#FEBD00]"
          >
            <div className="flex flex-col items-center text-center">
              <FaChartBar className="text-4xl text-[#0142FF] mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Marketing Digital & Gestão de Tráfego
              </h4>
              <p className="text-gray-700">
                Aumente sua visibilidade online e atraia mais clientes para o
                seu negócio.
              </p>
            </div>
          </motion.div>

          {/* card 6 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="bg-[#00173F] text-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 border-2 border-[#FEBD00]"
          >
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="text-4xl text-[#FEBD00] mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Desenvolvimento Personalizado
              </h4>
              <p className="text-gray-300">
                Soluções sob medida para atender às necessidades específicas do
                seu negócio.
              </p>
            </div>
          </motion.div>
        </div>

        {/* botão saiba mais*/}
        <div className="text-center mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            aria-label="Saiba mais sobre nossos serviços"
            className="inline-flex items-center justify-center gap-2 bg-[#FEBD00] text-[#3C0142] font-semibold px-8 py-3 rounded-lg shadow-md transition hover:bg-[#0142FF] hover:text-white"
          >
            Saiba Mais <FaExternalLinkSquareAlt />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Services;
