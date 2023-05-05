import UserRepository from '../../repositories/UserRepository';

class UserShow {
  #userRepository;

  constructor() {
    this.#userRepository = UserRepository;
  }

  async handle(userId) {
    return await this.#userRepository.findById(userId);
  }
}

export default new UserShow();
