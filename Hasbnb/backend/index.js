import express from "express";
import dotenv from 'dotenv'
dotenv.config()
const app = express();
import UserRoutes from "./domains/users/routes.js"
const PORT = process.env.PORT

app.use(express.json())
app.use('/users', UserRoutes)


app.get('/', (req, res) => {

    res.json({ msg: 'pagina home' })
})



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})

