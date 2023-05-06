import CourseRepository from '../../repositories/CourseRepository';
import CourseDTO from './DTO/CourseDTO';

class CourseUpdate {
  #courseRepository;

  constructor() {
    this.#courseRepository = CourseRepository;
  }

  async handle(courseId, data) {
    // TODO:: verify if logged user is owner..(only owner and admin can edit)
    const dto = new CourseDTO(
      data.owner_id,
      data.title,
      data?.description,
      data.price,
      data.categories
    );

    await this.#courseRepository.update(courseId, dto);
  }
}

export default new CourseUpdate();
