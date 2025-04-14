import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <section id="solucao" className="bg-[#f8f9fc] px-4 py-20 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 md:flex-row">
        {/* Texto */}
        <div className="flex-1">
          <h2 className="mb-6 text-3xl leading-tight font-extrabold text-gray-900 md:text-5xl">
            <span className="block text-blue-600">O consumidor mudou.</span>
            <span className="mt-1 block">E quem não está online,</span>
            <span className="block">está perdendo dinheiro.</span>
          </h2>
          <p className="mb-8 max-w-md text-base text-gray-700 md:text-lg">
            Mais de 70% das vendas começam com uma busca no Google ou no
            Instagram. A Geração Z já representa 32% da população. Você pode
            continuar esperando... ou pode começar a vender agora.
          </p>
        </div>

        {/* Etapas para formulário */}
        <div className="flex-1 space-y-6 rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300 hover:shadow-blue-200">
          {[
            {
              title: "Preencha formulário",
              desc: "Nome de sua empresa, seu e-mail, e o que você deseja melhorar no digital.",
            },
            {
              title: "Recebe o atendimento",
              desc: "Por lá iremos enviar a análise de seu perfil.",
            },
            {
              title: "Fale conosco no WhatsApp!",
              desc: "Nossa equipe estará de portas abertas para conversar com você!",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 transition hover:scale-[1.015]"
            >
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-blue-600 bg-white text-lg font-bold text-blue-600 shadow-sm">
                  {index + 1}
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {step.title}
                </p>
                <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}

          <Link
            to="/contato"
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-blue-700"
          >
            Boost já!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offer;
