import User from "../app/Models/User"

class UserRepository {
    #model

    constructor() {
        this.#model = User
    }

    async store(userStoreDto) {
        return await this.#model.create(userStoreDto.toObject())
    }
}

export default new UserRepository()