import { Posts } from '../models/posts'
import { ServerPostArray } from '../interfaces/serverPostArray'
import { ServerUserElement } from '../interfaces/serverUserElement'

export const convertPosts = (
      paramUser: ServerUserElement,
      paramPostArray: ServerPostArray
  ): Array<Posts> => {
      //console.log(paramUserArray.address)
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
          //userMap.id = element.id
          return postMap
      })
      return responseArray
  }