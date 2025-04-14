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
      className="bg-white px-6 py-20"
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
                className="block text-sm font-medium text-gray-700"
              >
                {field === "name"
                  ? "Nome"
                  : field === "email"
                    ? "Email"
                    : "Mensagem"}
              </label>
              {field === "message" ? (
                <textarea
                  name={field}
                  id={field}
                  rows="4"
                  value={form[field]}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm transition-all focus:border-blue-500 focus:ring-blue-500"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  value={form[field]}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm transition-all focus:border-blue-500 focus:ring-blue-500"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
            disabled={status === "loading"}
            whileTap={{ scale: 0.97 }}
          >
            {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
