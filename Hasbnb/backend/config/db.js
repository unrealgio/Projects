import "dotenv/config"
import mongoose from "mongoose";


const MONGO_URL = process.env.MONGO_URL

export const connectDb = async () => {

    try {
        await mongoose.connect(MONGO_URL)
        console.log('sucesso ao conectar com o banco')

    } catch (err) {
        console.log('erro ao conectar com banco', err)

    }
}

