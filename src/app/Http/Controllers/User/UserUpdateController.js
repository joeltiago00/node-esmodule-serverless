import UserUpdate from "../../../../useCases/User/UserUpdate"

class UserUpdateController {
    async handle(req, res) {
        await UserUpdate.handle(req.params.userId, req.body)
        return res.status(204)
    }
}

export default new UserUpdateController()