import { Router } from 'express';
import CourseStoreRequest from '../app/Http/Requests/Course/CourseStoreRequest';
import CourseStoreController from '../app/Http/Controllers/Course/CourseStoreController';
import CourseListController from '../app/Http/Controllers/Course/CourseListController';
import CourseShowController from '../app/Http/Controllers/Course/CourseShowController';
import CourseUpdateController from '../app/Http/Controllers/Course/CourseUpdateController';
import CourseUpdateRequest from '../app/Http/Requests/Course/CourseUpdateRequest';

const courseRouter = Router();

courseRouter.post(
  '/',
  CourseStoreRequest.validate,
  CourseStoreController.handle
);
courseRouter.get('/', CourseListController.handle);
courseRouter.get('/:courseId', CourseShowController.handle);
courseRouter.patch(
  '/:courseId',
  CourseUpdateRequest.validate,
  CourseUpdateController.handle
);

export { courseRouter };
