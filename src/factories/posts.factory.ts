import { Posts } from '../models/posts.model'
import { ServerPostArray } from '../interfaces/serverPostArray'
import { ServerUserElement } from '../interfaces/serverUserElement'

export class PostsFactory {
    convertPosts = (
        paramUser: ServerUserElement,
        paramPostArray: ServerPostArray
    ): Array<Posts> => {
        const responseArray = paramPostArray.data.map((element) => {
            const nameSeparator = paramUser.data.name.split(' ')
            let firstName = ''
            let lastName = ''

            if (nameSeparator.length > 2) {
                firstName = nameSeparator[1]
                lastName = nameSeparator[2]
            } else {
                firstName = nameSeparator[0]
                lastName = nameSeparator[1]
            }

            const postMap: Posts = {
                userId: element.userId,
                name: `${firstName} ${lastName}`,
                email: paramUser.data.email,
                postId: element.id,
                title: element.title,
                body: element.body,
            }
            return postMap
        })
        return responseArray
    }
}
