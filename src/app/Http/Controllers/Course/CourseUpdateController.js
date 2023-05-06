import CourseUpdate from '../../../../useCases/Course/CourseUpdate';

class CourseUpdateController {
  async handle(req, res) {
    CourseUpdate.handle(req.params.courseId, req.body);

    return res.status(204).send();
  }
}

export default new CourseUpdateController();
