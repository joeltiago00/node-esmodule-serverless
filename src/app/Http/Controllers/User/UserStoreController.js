import UserStore from "../../../../useCases/User/UserStore"

class UserStoreController {
    async handle(req, res) {
        return res.status(201)
            .json(await UserStore.handle(req.body))
    }
}

export default new UserStoreController()