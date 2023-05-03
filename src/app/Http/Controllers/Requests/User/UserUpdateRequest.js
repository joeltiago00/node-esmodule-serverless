import Joi from "joi";
import RequestValidator from "../RequestValidator";

class UserStoreRequest {
    async validate(req, res, next) {
        const validator = Joi.object({
            first_name: Joi.string().min(2).max(20),
            last_name: Joi.string().min(2).max(50)
        })

        return await RequestValidator.handle(validator, req, res, next);
    }
}

export default new UserStoreRequest();