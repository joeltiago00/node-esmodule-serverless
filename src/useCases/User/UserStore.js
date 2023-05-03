import UserRepository from '../../repositories/UserRepository';
import UserStoreDTO from './DTO/UserStoreDTO';

class UserStore {
  #userRepository;

  constructor() {
    this.#userRepository = UserRepository;
  }

  async handle(data) {
    return await this.#userRepository.store(
      new UserStoreDTO(
        data.first_name,
        data?.last_name,
        data.email,
        data.password
      )
    );
  }
}

export default new UserStore();
