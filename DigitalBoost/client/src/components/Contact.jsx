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
      className="py-20 bg-white px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-500 mb-12">
          Preencha o formulário abaixo e retornaremos em breve.
        </p>

        {status === "success" && (
          <motion.p
            className="mb-6 text-green-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Sua mensagem foi enviada com sucesso!
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            className="mb-6 text-red-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ❌ Algo deu errado. Tente novamente.
          </motion.p>
        )}

        <motion.form
          onSubmit={handleSubmit}
          className={`grid gap-6 text-left ${
            status === "success" ? "opacity-70 pointer-events-none" : ""
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
                  className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  value={form[field]}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300"
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
