import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // ou outro provedor SMTP
    auth: {
      user: 'SEU_EMAIL@gmail.com',
      pass: 'SUA_SENHA_DO_EMAIL'
    }
  });

  const mailOptions = {
    from: email,
    to: 'DESTINATARIO@gmail.com',
    subject: `Mensagem de ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email enviado');
  } catch (error) {
    res.status(500).send('Erro ao enviar o email');
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));