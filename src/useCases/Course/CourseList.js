import CourseRepository from '../../repositories/CourseRepository';

class CourseList {
  #courseRepository;

  constructor() {
    this.#courseRepository = CourseRepository;
  }
  async handle() {
    return await this.#courseRepository.list();
  }
}

export default new CourseList();
