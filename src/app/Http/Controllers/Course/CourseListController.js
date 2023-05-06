import CourseList from '../../../../useCases/Course/CourseList';
import CourseTransformer from '../../Transformers/Course/CourseTransformer';

class CourseListController {
  async handle(req, res) {
    return res
      .status(200)
      .json(CourseTransformer.collection(await CourseList.handle()));
  }
}

export default new CourseListController();
