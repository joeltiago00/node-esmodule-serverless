import UserRepository from '../../repositories/UserRepository';
import UserUpdateDTO from './DTO/UserUpdateDTO';

class UserUpdate {
  #userRepository;

  constructor() {
    this.#userRepository = UserRepository;
  }

  async handle(userId, data) {
    const dto = new UserUpdateDTO(data.first_name, data.last_name);

    await this.#userRepository.updateById(userId, dto);

    return;
  }
}

export default new UserUpdate();
