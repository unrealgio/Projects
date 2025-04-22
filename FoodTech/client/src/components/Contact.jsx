import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false); // Estado para controlar a mensagem de confirmação

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    setSubmitted(true); // Exibe a mensagem de confirmação

    // Redireciona o usuário após 5 segundos
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative h-auto md:h-[1000px] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-7c10-61f7-8dd3-c77ff989bcc1/raw?se=2025-04-22T19%3A51%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=600f66ea-7626-58c4-8984-ead9af6a067f&skoid=ae70be19-8043-4428-a990-27c58b478304&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-22T04%3A30%3A54Z&ske=2025-04-23T04%3A30%3A54Z&sks=b&skv=2024-08-04&sig=X%2BwUX65OqztAq7bfQl3QtfbZAzgd81x5zfvEr0tSMU0%3D')",
      }}
    >
      {/* Camada Opaca */}
      <div className="absolute inset-0 bg-[#0000004d] bg-opacity-50"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col md:flex-row h-full w-full items-center justify-between px-6 md:px-20 py-12">
        {/* Texto à Esquerda */}
        <div className="text-white max-w-lg mb-8 md:mb-0 text-center md:text-left mt-16 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            Tem alguma dúvida ou quer saber mais sobre nossos serviços? Fale
            conosco e faremos o possível para ajudar!
          </p>
          <p className="text-xs md:text-sm text-gray-400">
            <a
              href="https://www.freepik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              Imagem de Freepik
            </a>
          </p>
        </div>

        {/* Formulário à Direita */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Email */}
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
                  placeholder="Digite um email válido"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FEBD00]"
                  required
                />
              </div>
              {/* Nome */}
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
                  placeholder="Digite seu nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FEBD00]"
                  required
                />
              </div>
            </div>

            {/* Endereço */}
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Endereço
              </label>
              <input
                type="text"
                id="address"
                placeholder="Digite seu endereço"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FEBD00]"
              />
            </div>

            {/* Mensagem */}
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

            {/* Botão de Enviar */}
            <button
              type="submit"
              className="w-full bg-[#FEBD00] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0142FF] transition"
            >
              ENVIAR
            </button>
          </form>
        ) : (
          /* Mensagem de Confirmação */
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md text-center">
            <h3 className="text-2xl font-bold text-[#0142FF] mb-4">
              Obrigado!
            </h3>
            <p className="text-gray-700">
              Sua mensagem foi enviada com sucesso. Você será redirecionado em
              breve.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;