import CourseRepository from '../../repositories/CourseRepository';

class CourseShow {
  #courseRepository;

  constructor() {
    this.#courseRepository = CourseRepository;
  }

  async handle(courseId) {
    return await this.#courseRepository.findById(courseId);
  }
}

export default new CourseShow();
