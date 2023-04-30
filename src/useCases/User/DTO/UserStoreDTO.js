class UserStoreDTO {
    firstName
    lastName
    email
    password

    constructor(firstName, lastName, email, password) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password

        return this
    }

    toObject() {
        return {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password
        }
    }
}

export default UserStoreDTO