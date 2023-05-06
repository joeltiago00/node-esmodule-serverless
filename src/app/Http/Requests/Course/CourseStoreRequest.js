import Joi from 'joi';
import RequestValidator from '../RequestValidator';

class CourseStoreRequest {
  async validate(req, res, next) {
    const validator = Joi.object({
      owner_id: Joi.string().required(),
      title: Joi.string().min(2).max(100).required(),
      description: Joi.string(),
      price: Joi.number().required(),
      categories: Joi.required(),
    });

    return await RequestValidator.handle(validator, req, res, next);
  }
}

export default new CourseStoreRequest();
