import UserRepository from '../../repositories/UserRepository';

class UserIndex {
  #userRepository;

  constructor() {
    this.#userRepository = UserRepository;
  }

  async handle(filters) {
    return await this.#userRepository.list();
  }
}

export default new UserIndex();
