import { Router } from 'express';
import UserController from './controllers/UsersController';

const router = Router();

router.post('/customer', UserController.create);

router.get('/user', UserController.list);

export { router };
