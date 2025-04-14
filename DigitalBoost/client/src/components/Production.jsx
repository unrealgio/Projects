import React from "react";
import { Users, Layers, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

const Production = () => {
  return (
    <section
      id="ecommerce"
      className="font-inter flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#124EFE] via-[#003CFF] to-[#005BFF] px-4 py-12 text-white"
    >
      <div className="rounded-2xl bg-[#0c2f97] px-6 py-10">
        <div className="grid w-full max-w-7xl items-center gap-8 md:grid-cols-2">
          {/* Lado Esquerdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl bg-white p-6 text-[#001CFF] shadow-xl md:p-10"
          >
            <h1 className="mb-2 text-3xl leading-tight font-bold md:text-4xl">
              Ecossistema Completo <br />
              <span className="font-bold text-black">de Soluções Digitais</span>
            </h1>
            <p className="mt-4 text-sm text-gray-700 md:text-base">
              Quer dar aquele boost nas vendas online? A gente te ajuda! Somos a
              Digital Boost, especialistas em turbinar o faturamento da sua
              empresa no digital. Seja e-commerce, tráfego pago ou design
              thinking, temos tudo o que você precisa para se destacar, criar
              laços com seus clientes e, claro, vender muito mais.
            </p>

            <h2 className="mt-6 mb-4 text-xl font-bold md:text-2xl">
              Benefícios:
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-white p-2 text-[#FEBD00] shadow">
                  <Users size={20} />
                </div>
                <p className="text-sm text-gray-700 md:text-base">
                  <strong>Atendimento Ágil:</strong> Equipe comercial sempre
                  pronta para te atender.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-white p-2 text-[#FEBD00] shadow">
                  <Layers size={20} />
                </div>
                <p className="text-sm text-gray-700 md:text-base">
                  <strong>Planos Flexíveis:</strong> Versatilidade em nossos
                  planos, adaptados às suas necessidades.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-white p-2 text-[#FEBD00] shadow">
                  <Puzzle size={20} />
                </div>
                <p className="text-sm text-gray-700 md:text-base">
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
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              src="/img/hero-image.png"
              alt="Profissional digital"
              className="h-135 w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Opções */}
        <div className="mt-12 grid w-full max-w-7xl gap-6 md:grid-cols-3">
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
              className="rounded-xl bg-white p-6 text-[#001CFF] shadow-md"
            >
              <h3 className="mb-4 text-lg font-bold md:text-xl">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-pointer rounded-full border border-[#001CFF] px-3 py-1 text-sm transition duration-300 hover:border-[#FEBD00] hover:bg-[#FEBD00] hover:text-white"
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
