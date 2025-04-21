import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "../../domains/users/model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const router = Router();
const { SECRET_KEY } = process.env;

if (!SECRET_KEY) {
  throw new Error("SECRET_KEY não está definido no arquivo .env");
}

// Endpoint para buscar todos os usuários
router.get("/", async (req, res) => {
  try {
    connectDb();

    const userDoc = await User.find();

    res.json(userDoc);
  } catch (err) {
    res.status(500).json({ msg: "Não foi possível buscar os usuários", err });
  }
});

// Endpoint para criar um novo usuário
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Todos os campos são obrigatórios." });
  }

  try {
    connectDb();

    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);

    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    res.status(201).json(newUserDoc);
  } catch (err) {
    res.status(500).json({ msg: "Não foi possível criar o usuário.", err });
  }
});

// Endpoint para login
console.log("Início do endpoint /login");
router.post("/login", async (req, res) => {
  connectDb();

  const { email, password } = req.body;

  console.log("Dados recebidos:", { email, password });

  if (!email || !password) {
    console.log("Email ou senha não fornecidos.");
    return res.status(400).json({ msg: "Email e senha são obrigatórios." });
  }

  try {
    const userDoc = await User.findOne({ email });
    console.log("Usuário encontrado:", userDoc);

    if (!userDoc) {
      console.log("Usuário não encontrado.");
      return res.status(404).json({ err: "Usuário não encontrado!" });
    }

    const passwordCorrect = bcrypt.compareSync(password, userDoc.password);
    console.log("Senha correta:", passwordCorrect);

    if (passwordCorrect) {
      const newUser = {
        name: userDoc.name,
        _id: userDoc._id,
        email: userDoc.email,
      };

      const token = jwt.sign(newUser, SECRET_KEY, { expiresIn: "1h" });
      console.log("Token gerado:", token);

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
        })
        .json(newUser);
    } else {
      console.log("Senha inválida.");
      res.status(400).json({ msg: "Senha inválida!" });
    }
  } catch (error) {
    console.error("Erro no servidor:", error);
    res
      .status(500)
      .json({ err: "Tivemos um erro ao conectar com o servidor", error });
  }
});

router.get("/profile", async (req, res) => {
  const { token } = req.cookies;

  if (token) {
    try {
      const userInfo = jwt.verify(token, SECRET_KEY);
      res.json(userInfo);
    } catch (err) {
      console.error("Erro ao verificar o token:", err);
      res.status(500).json({ msg: "Não foi possível verificar o token.", err });
    }
  } else {
    res.json(null);
  }
});

export default router;
