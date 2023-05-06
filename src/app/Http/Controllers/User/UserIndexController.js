import UserIndex from '../../../../useCases/User/UserIndex';
import UserTransformer from '../../Transformers/User/UserTransformer';

class UserIndexController {
  async handle(req, res) {
    return res
      .status(200)
      .json(UserTransformer.collection(await UserIndex.handle()));
  }
}

export default new UserIndexController();
