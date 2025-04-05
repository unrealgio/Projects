import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (email && password) {
    //   try {
    //     const { data: userDoc } = await axios.post("/users/login", {
    //       email,
    //       password,
    //     });
    //     console.log(userDoc);
    //     setUser(userDoc);
    //     setRedirect(true);

    //   } catch (error) {
    //     alert(
    //       `Deu um erro ao tentar logar ${error.response?.data || error.message} `,
    //     );
    //   }
    // } else {
    //   alert("Você precisa preencher o email e a senha!");
    // }
  };

  if (redirect) return <Navigate to="/" />
    
  return (
    <section className="flex items-center">
      <div className="max-w-7x1 mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Cadastre-se</h1>
        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white">
            Registrar
          </button>
        </form>

        <p>
          Já tem uma conta?{" "}
          <Link to="/register" className="font-semibold underline">
            Entre aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
