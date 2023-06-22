import express, { Request, Response } from 'express'
import { UserService } from '../services/user';
import { UserController } from '../controller/user';

const userRouter = express.Router();

const userService = new UserService();
const userController = new UserController(userService);

userRouter.post('/user', (req: Request, res: Response) => userController.create(req, res));
userRouter.get('/user',  (req: Request, res: Response) => userController.read(req, res) );
userRouter.get('/user',  (req: Request, res: Response) => userController.read(req, res) );
userRouter.get('/user/:_id',  (req: Request, res: Response) => userController.getById(req, res) );
userRouter.put('/user/:_id',  (req: Request, res: Response) => userController.update(req, res) );
userRouter.delete('/user/:_id',  (req: Request, res: Response) => userController.deleteController(req, res) );

export default userRouter;