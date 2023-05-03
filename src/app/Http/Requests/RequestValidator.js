
class RequestValidator {
    async handle(schema, req, res, next) {
        // eslint-disable-next-line no-unused-vars
        const { error, values } = schema.validate(req.body);

        if (error) {
            const errorMessages = error.details.map((error) => {
                return { [error.path[0]]: error.message }
            })

            return res.status(422).json({ errors: errorMessages })
        }

        next();
    }
}

export default new RequestValidator()