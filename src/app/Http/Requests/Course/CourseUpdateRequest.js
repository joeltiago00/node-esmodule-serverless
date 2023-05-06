import Joi from 'joi';
import RequestValidator from '../RequestValidator';

class CourseUpdateRequest {
  async validate(req, res, next) {
    const validator = Joi.object({
      title: Joi.string().min(2).max(100),
      description: Joi.string(),
      price: Joi.number(),
      categories: Joi.array(),
    });

    return await RequestValidator.handle(validator, req, res, next);
  }
}

export default new CourseUpdateRequest();
