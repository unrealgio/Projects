import React from "react";
import { MessageCircle } from "lucide-react";

const Offer = () => {
  return (
    <section className="bg-[#f8f9fc] py-16 px-4 md:px-8" id="lead-magnet">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto e Imagem PDF */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            <span className="text-blue-600 block">
              Você quer saber como arrumar seu Instagram
            </span>
            para receber visitantes?
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-8 max-w-md">
            Execute esses passos e receba um PDF ensinando o que um Instagram
            precisa para estar organizado.
          </p>
          <div className="rounded-2xl shadow-lg overflow-hidden max-w-md">
            <img
              src="/img/preview-pdf.jpg" // substitua pelo caminho real
              alt="Preview do PDF"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Etapas e botão */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 space-y-6">
          {[
            {
              title: "Preencha formulário",
              desc: "Nome de sua empresa, seu e-mail, e o que você deseja melhorar no digital",
            },
            {
              title: "Recebe o atendimento",
              desc: "Por lá iremos enviar a análise de seu perfil.",
            },
            {
              title: "Fale conosco no WhatsApp",
              desc: "",
            },
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center text-blue-600 font-bold text-lg shadow">
                  {index + 1}
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {step.title}
                </p>
                {step.desc && (
                  <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                )}
              </div>
            </div>
          ))}

          <button className="mt-4 bg-blue-600 text-white font-semibold text-base py-3 px-6 rounded-xl hover:bg-blue-700 transition w-full">
            Baixe agora
          </button>
        </div>
      </div>

     {/* Botão do WhatsApp com ícone Lucide */}
<a
  href="https://wa.me/seunumerodowhatsapp"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-blue-600 rounded-full shadow-lg p-4 hover:bg-blue-700 transition"
  aria-label="Fale conosco no WhatsApp"
>
  <MessageCircle className="text-white w-6 h-6" />
</a>
    </section>
  );
};

export default Offer;
