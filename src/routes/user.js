import { Router } from "express"
import UserStoreController from "../app/Http/Controllers/User/UserStoreController"
import UserStoreRequest from "../app/Http/Controllers/Requests/User/UserStoreRequest"
import UserUpdateRequest from "../app/Http/Controllers/Requests/User/UserUpdateRequest"
import UserUpdateController from "../app/Http/Controllers/User/UserUpdateController"

const userRouter = Router()

userRouter.post('/', UserStoreRequest.validate, UserStoreController.handle)
userRouter.patch('/:userId', UserUpdateRequest.validate, UserUpdateController.handle)

export {
    userRouter
}