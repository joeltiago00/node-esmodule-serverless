import { Router } from "express"
import UserStoreController from "../app/Http/Controllers/User/UserStoreController"

const userRouter = Router()

userRouter.post('/', UserStoreController.handle)

export {
    userRouter
}