import Course from '../app/Models/Course';

class CourseRepoistory {
  #model;

  constructor() {
    this.#model = Course;
  }

  async store(courseDTO) {
    return await this.#model.create(courseDTO.toDatabase());
  }

  async update(courseId, courseDTO) {
    return await this.#model.updateOne(
      { _id: courseId },
      courseDTO.toDatabase(false)
    );
  }

  async list() {
    return await this.#model.find({ deleted_at: null });
  }

  async findById(courseId) {
    return await this.#model.findOne({
      _id: courseId,
      deleted_at: null,
    });
  }
}

export default new CourseRepoistory();
