import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  // Estados para os campos do formulário
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Atualiza os campos conforme o usuário digita
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Envia os dados para o backend
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await fetch("http://localhost:5000/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 4000);
  } catch (error) {
    alert("Erro ao enviar mensagem. Tente novamente.", error);
  }
};

  return (
    <section
      id="contact"
      className="relative h-auto md:h-[1000px] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/pw/AP1GczNRR8mTAz68TdP7FPSe56-yaqjG3G6RIOkQKc8DtVKbEu-HcL9rtDUC7gozsbrY5slCyUjV0L0bunAxmIlszHCtO5HH0bcI85IflVztYg24ZmL5zwM3KYB_H8MIe5wLjpI1fquL31AZmaxpPek4CYU=w1430-h953-s-no-gm?authuser=0')",
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
                  name="email"
                  value={form.email}
                  onChange={handleChange}
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
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FEBD00]"
                  required
                />
              </div>
            </div>

            {/* telefone */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Telefone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
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
                name="message"
                value={form.message}
                onChange={handleChange}
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
