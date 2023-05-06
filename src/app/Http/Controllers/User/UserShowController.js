import UserShow from '../../../../useCases/User/UserShow';
import UserTransformer from '../../Transformers/User/UserTransformer';

class UserShowController {
  async handle(req, res) {
    return res
      .status(200)
      .json(UserTransformer.make(await UserShow.handle(req.params.userId)));
  }
}

export default new UserShowController();
