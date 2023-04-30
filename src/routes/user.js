import { Router } from "express"
import User from "../app/Models/User"

const userRouter = Router()

userRouter.get('/', async (req, res) => {
    return res.json(await User.find({ "email.address": '2@gmail.com' })).status(200)
})

export {
    userRouter
}