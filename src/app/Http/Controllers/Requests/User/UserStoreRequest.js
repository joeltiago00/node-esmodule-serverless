import Joi from "joi";
import RequestValidator from "../RequestValidator";

class UserStoreRequest {
    async validate(req, res, next) {
        const validator = Joi.object({
            first_name: Joi.string().min(2).max(20).required(),
            last_name: Joi.string().min(2).max(50),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(32).required()
        })

        return await RequestValidator.handle(validator, req, res, next);
    }
}

export default new UserStoreRequest();