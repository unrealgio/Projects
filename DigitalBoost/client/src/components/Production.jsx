import React from "react";
import { Users, Layers, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

const Production = () => {
  return (
    <section className="bg-gradient-to-br from-[#124EFE] via-[#003CFF] to-[#005BFF] text-white min-h-screen flex flex-col items-center justify-center px-4 py-12 font-inter">
      <div className="bg-[#0c2f97] px-6 py-10 rounded-2xl">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Lado Esquerdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white text-[#001CFF] rounded-xl p-6 md:p-10 shadow-xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
              Ecossistema Completo <br />
              <span className="text-black font-bold">de Soluções Digitais</span>
            </h1>
            <p className="text-gray-700 mt-4 text-sm md:text-base">
              Quer dar aquele boost nas vendas online? A gente te ajuda! Somos a
              Digital Boost, especialistas em turbinar o faturamento da sua
              empresa no digital. Seja e-commerce, tráfego pago ou design
              thinking, temos tudo o que você precisa para se destacar, criar
              laços com seus clientes e, claro, vender muito mais.
            </p>

            <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4">
              Benefícios:
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full shadow text-[#001CFF]">
                  <Users size={20} />
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  <strong>Atendimento Ágil:</strong> Equipe comercial sempre
                  pronta para te atender.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full shadow text-[#001CFF]">
                  <Layers size={20} />
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  <strong>Planos Flexíveis:</strong> Versatilidade em nossos
                  planos, adaptados às suas necessidades.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full shadow text-[#001CFF]">
                  <Puzzle size={20} />
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  <strong>Soluções Completas:</strong> Variedade de serviços em
                  um só lugar.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Lado Direito (Imagem) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="/img/example4.jpg"
              alt="Profissional digital"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Seção de Categorias */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 w-full max-w-7xl">
          {[
            {
              title: "E-Commerce",
              items: ["Implantação", "Migração", "Performance", "Manutenção"],
            },
            {
              title: "Design Thinking",
              items: ["Identidade", "Narrativa", "Branding", "Engajamento"],
            },
            {
              title: "Tráfego Pago",
              items: ["Segmentação", "Anúncios", "Alcance", "Leads"],
            },
          ].map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-[#001CFF] p-6 rounded-xl shadow-md"
            >
              <h3 className="text-lg md:text-xl font-bold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 border border-[#001CFF] rounded-full text-sm cursor-pointer hover:bg-[#0142ff] transition duration-300 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Production;
