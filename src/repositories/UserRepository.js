import mongoose from 'mongoose';
import User from '../app/Models/User';

class UserRepository {
  #model;

  constructor() {
    this.#model = User;
  }

  async store(userStoreDto) {
    return await this.#model.create(userStoreDto.toDatabase());
  }

  async updateById(userId, userUpdateDto) {
    return await this.#model.updateOne(
      { _id: userId },
      userUpdateDto.toDatabase()
    );
  }

  async findById(userId) {
    return await this.#model.find({
      _id: userId,
      deleted_at: null,
    });
  }
}

export default new UserRepository();
