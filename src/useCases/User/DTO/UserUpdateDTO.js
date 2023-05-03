import ToDatabase from "../../ToDatabase"

class UserUpdateDTO {
    firstName
    lastName

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName

        return this
    }

    toDatabase() {
        return ToDatabase.handle(this)
        return {
            first_name: this.firstName,
            last_name: this.lastName,
        }
    }
}

export default UserUpdateDTO