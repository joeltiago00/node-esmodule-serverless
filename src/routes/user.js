import { Router } from "express"
import UserStoreController from "../app/Http/Controllers/User/UserStoreController"
import UserStoreRequest from "../app/Http/Controllers/Requests/User/UserStoreRequest"

const userRouter = Router()

userRouter.post('/', UserStoreRequest.validate, UserStoreController.handle)

export {
    userRouter
}