import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false); // Estado para controlar a mensagem de confirmação

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative h-auto md:h-[1000px] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-7c10-61f7-8dd3-c77ff989bcc1/raw?se=2025-04-23T20%3A09%3A47Z&sp=r&sv=2024-08-04&sr=b&scid=9394041d-6e97-502c-a0e2-65133883f1fd&skoid=2f36945c-3adc-4614-ac2b-eced8f672c58&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-23T16%3A17%3A15Z&ske=2025-04-24T16%3A17%3A15Z&sks=b&skv=2024-08-04&sig=GY3XLncJcKv29lGn6%2BN02Tn8fvWEtvzPWQJzhifsIpU%3D')",
      }}
    >
      {/* opacidade do background */}
      <div className="absolute inset-0 bg-[#000000b9] bg-opacity-50"></div>

      {/* conteudo */}
      <div className="relative z-10 flex flex-col md:flex-row h-full w-full items-center justify-between px-6 md:px-20 py-12">
        {/* texto esquerda */}
        <div className="text-white max-w-lg mb-8 md:mb-0 text-center md:text-left mt-16 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            Tem alguma dúvida ou quer saber mais sobre nossos serviços? Fale
            conosco e faremos o possível para ajudar!
          </p>
        </div>

        {/* formulário */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* email */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FEBD00]"
                  required
                />
              </div>
              {/* nome */}
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FEBD00]"
                  required
                />
              </div>
            </div>

            {/* endereço */}
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Telefone
              </label>
              <input
                type="Number"
                id="address"
                placeholder="Seu telefone para contato"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FEBD00]"
              />
            </div>

            {/* mensagem */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                placeholder="Digite sua mensagem"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FEBD00]"
                required
              ></textarea>
            </div>

            {/* botão de enviar */}
            <button
              type="submit"
              className="w-full bg-[#FEBD00] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0142FF] transition"
            >
              ENVIAR
            </button>
          </form>
        ) : (
          /* confirmação de envio */
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md text-center">
            <h3 className="text-2xl font-bold text-[#0142FF] mb-4">
              Obrigado pelo contato com a Digital Boost! 🚀
            </h3>
            <p className="text-gray-700">
              Sua mensagem foi enviada com sucesso! Vamos te redirecionar
              rapidinho.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
