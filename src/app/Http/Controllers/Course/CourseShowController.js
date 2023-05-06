import CourseShow from '../../../../useCases/Course/CourseShow';
import CourseTransformer from '../../Transformers/Course/CourseTransformer';

class CourseShowController {
  async handle(req, res) {
    return res
      .status(200)
      .json(
        CourseTransformer.make(await CourseShow.handle(req.params.courseId))
      );
  }
}

export default new CourseShowController();
