function validateRequest(req, res, next) {
  console.log("Validando request:", req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Nome, email e mensagem são obrigatórios." });
  }

  // Validação simples de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Email inválido." });
  }

  next();
}

module.exports = validateRequest;