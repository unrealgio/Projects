import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <motion.section
      id="contato"
      className="scroll-mt-32 bg-white px-6 py-20 pt-32" // <- Aqui está o ajuste
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-3xl font-bold text-gray-800">
          Entre em Contato
        </h2>
        <p className="mb-12 text-gray-500">
          Preencha o formulário abaixo e retornaremos em breve.
        </p>

        {status === "success" && (
          <motion.p
            className="mb-6 font-medium text-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Sua mensagem foi enviada com sucesso!
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            className="mb-6 font-medium text-red-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ❌ Algo deu errado. Tente novamente.
          </motion.p>
        )}

        <div className="rounded-2xl bg-gray-50 p-8 shadow-xl">
          <motion.form
            onSubmit={handleSubmit}
            className={`grid gap-6 text-left ${
              status === "success" ? "pointer-events-none opacity-70" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {["name", "email", "message"].map((field, index) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor={field}
                  className="mb-1 block text-sm font-semibold text-gray-700"
                >
                  {field === "name"
                    ? "Nome"
                    : field === "email"
                      ? "Email"
                      : "Mensagem"}
                </label>

                <div className="relative">
                  {field !== "message" && (
                    <span className="absolute top-1/2 left-3 -translate-y-1/2 text-lg text-gray-400">
                      {field === "name" ? "👤" : "✉️"}
                    </span>
                  )}

                  {field === "message" ? (
                    <textarea
                      name={field}
                      id={field}
                      rows="4"
                      value={form[field]}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      id={field}
                      value={form[field]}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-xl border border-gray-200 bg-white py-3 pr-4 pl-10 text-sm shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </div>
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-semibold text-white transition duration-300 hover:brightness-110"
              disabled={status === "loading"}
              whileTap={{ scale: 0.97 }}
            >
              {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
