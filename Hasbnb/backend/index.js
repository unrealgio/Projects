import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import UserRoutes from "./domains/users/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Substitua pelo endereço do seu frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    credentials: true, // Permite envio de cookies, se necessário
  }),
);

app.use(express.json());
app.use("/users", UserRoutes);

app.get("/", (req, res) => {
  res.json({ msg: "pagina home" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
