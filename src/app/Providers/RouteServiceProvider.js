import { userRouter } from "../../routes/user";

class RouteServiceProvider {
    handle(app) {
        app.get("/", (req, res, next) => {
            return res.status(200).json({
                message: "API ON!",
            });
        });

        app.use('/user', userRouter)

        return app
    }
}

export default new RouteServiceProvider()