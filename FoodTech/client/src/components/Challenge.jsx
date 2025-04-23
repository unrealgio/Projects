import React from "react";
import { motion } from "framer-motion";

const Challenge = () => {
  return (
    <section
      id="challenge"
      className="bg-gradient-to-b from-[#000A26] to-[#FEBD00] text-white py-12 px-4 sm:py-16 sm:px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* título */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              O Desafio dos{" "}
              <span className="text-[#FEBD00] font-semibold">
                Restaurantes no Brasil
              </span>
            </h2>
            {/* conteúdo */}
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              A paixão pela gastronomia não basta quando os{" "}
              <span className="text-[#FEBD00] font-semibold">números</span>{" "}
              jogam contra.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Empreender na gastronomia é o sonho de muitos, mas a realidade
              impõe{" "}
              <span className="text-[#FEBD00] font-semibold">
                grandes desafios
              </span>
              . Abrir um restaurante exige paixão e dedicação, mas isso nem
              sempre basta.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Em um mercado competitivo, com margens apertadas e gestão
              complexa,{" "}
              <span className="text-[#FEBD00] font-semibold">
                a força de vontade sozinha não garante a sobrevivência.
              </span>
            </p>
          </motion.div>

          {/* imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-crise-de-negocios_114360-8950.jpg?uid=R195674881&ga=GA1.1.197243129.1744348516&w=740"
              alt="Desafios dos Restaurantes no Brasil"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#002D9B] p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-[#FEBD00]"
          >
            <p className="text-base sm:text-lg font-semibold">
              3 a cada 10 restaurantes fecham as portas em menos de um ano.
            </p>
            <div className="mt-4 flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/12008/12008557.png"
                alt="Estatística 1"
                className="w-10 sm:w-12 h-10 sm:h-12"
              />
            </div>
          </motion.div>

          {/* card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-black p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-[#FEBD00]"
          >
            <p className="text-base sm:text-lg font-semibold">
              Após dois anos, cerca de 50% dos restaurantes fecham as portas.
            </p>
            <div className="mt-4 flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/893/893214.png"
                alt="Estatística 2"
                className="w-10 sm:w-12 h-10 sm:h-12"
              />
            </div>
          </motion.div>

          {/* card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#002D9B] p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-[#FEBD00]"
          >
            <p className="text-base sm:text-lg font-semibold">
              Eles não falham por falta de esforço, mas por falta das
              ferramentas certas.
            </p>
            <div className="mt-4 flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2440/2440516.png"
                alt="Estatística 3"
                className="w-10 sm:w-12 h-10 sm:h-12"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
