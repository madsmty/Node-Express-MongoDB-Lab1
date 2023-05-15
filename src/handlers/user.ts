import { UserController } from "../controllers/users"
import { Request, Response } from 'express';

export const getUserHandler = (req: Request, res: Response) => {
      const userInstance = new UserController(res,req);
      return userInstance.getAll();
}

