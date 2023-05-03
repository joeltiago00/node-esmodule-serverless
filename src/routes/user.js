import { Router } from 'express';
import UserStoreController from '../app/Http/Controllers/User/UserStoreController';
import UserStoreRequest from '../app/Http/Requests/User/UserStoreRequest';
import UserUpdateRequest from '../app/Http/Requests/User/UserUpdateRequest';
import UserUpdateController from '../app/Http/Controllers/User/UserUpdateController';
import UserIndexController from '../app/Http/Controllers/User/UserIndexController';

const userRouter = Router();

userRouter.post('/', UserStoreRequest.validate, UserStoreController.handle);
userRouter.patch(
  '/:userId',
  UserUpdateRequest.validate,
  UserUpdateController.handle
);
userRouter.get('/', UserIndexController.handle);

export { userRouter };
