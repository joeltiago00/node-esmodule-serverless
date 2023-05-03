import cleanObject from '../../../utils/cleanObject';

class UserUpdateDTO {
  firstName;
  lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    return this;
  }

  toDatabase() {
    return cleanObject(this);
  }
}

export default UserUpdateDTO;
