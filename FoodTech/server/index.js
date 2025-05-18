const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const emailRoutes = require("../server/src/routes/emailRoutes");
const errorHandler = require("../server/src/middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;


// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api", emailRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

// Inicializar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});