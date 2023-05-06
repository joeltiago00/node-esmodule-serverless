import CourseRepository from '../../repositories/CourseRepository';
import CourseDTO from './DTO/CourseDTO';

class CourseStore {
  #courseRepository;

  constructor() {
    this.#courseRepository = CourseRepository;
  }

  async handle(data) {
    const dto = new CourseDTO(
      data.owner_id,
      data.title,
      data?.description,
      data.price,
      data.categories
    );

    return await this.#courseRepository.store(dto);
  }
}

export default new CourseStore();
