import { Request, Response } from 'express';
import UserService from '../../domain/user/services/UserCreateService';
import UserList from '../../domain/user/services/UserListService';
import Mock from '../../domain/user/mocks/UserMock';

class UserController {
  static create(req: Request, res: Response) {
    const dados = req.body;
    try {
      const validator = UserService.UserCreate(dados);
      if (validator) {
        res.status(200).json('criado');
      }
    } catch (err: any) {
      res.status(400).json(err.message);
    }
  }

  static list(req: Request, res: Response) {
    let createList = UserList.CreateList(Mock);
    console.log(createList);
    res.json(createList);
  }
}

export default UserController;
