const transporter = require("../../config/emailConfig");

const sendEmail = async (req, res, next) => {
  const { name, email, message, phone } = req.body;
  console.log("Recebido do frontend:", req.body);

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "Email recebido do site!",
      html: `
        <h3>Nova mensagem de contato</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || "não informado"}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });
    console.log("enviou o email:", info);
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.log("Erro ao enviar email:");
    next(error);
  }
};

module.exports = { sendEmail };