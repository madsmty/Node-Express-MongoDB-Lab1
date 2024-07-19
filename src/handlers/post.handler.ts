import { PostController } from '../controllers/posts.controller'
import { Request, Response } from 'express'

export const getPostsFromUserHandler = (req: Request, res: Response) => {
    const userInstance = new PostController(res, req)
    return userInstance.getUserPosts()
}
