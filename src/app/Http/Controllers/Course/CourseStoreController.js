import CourseStore from '../../../../useCases/Course/CourseStore';
import CourseTransformer from '../../Transformers/Course/CourseTransformer';

class CourseStoreController {
  async handle(req, res) {
    return res
      .status(201)
      .json(CourseTransformer.make(await CourseStore.handle(req.body)));
  }
}

export default new CourseStoreController();
