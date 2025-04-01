import { Router } from 'express'
import { connectDb } from "../../config/db.js";
import User from '../../domains/users/model.js'
import bcrypt from "bcryptjs"
const bcryptSalt = bcrypt.genSaltSync()

const router = Router()


router.get('/', async (req, res) => {

    try {


        connectDb()

        const userDoc = await User.find()

        res.json(userDoc)
    } catch (err) {

        res.status(500).json({ msg: "não foi possivel buscar os usuarios", err })
    }
})

router.post('/', async (req, res) => {

    const {name, email, password} = req.body
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt)

    try {
        connectDb()


        const newUserDoc = await User.create({

            name,
            email,
            password: encryptedPassword,
        })

        res.json(newUserDoc)
    } catch (err) {

        res.status(500).json({msg:"não foi possivel criar o usuário.", err})
    }
})

export default router;