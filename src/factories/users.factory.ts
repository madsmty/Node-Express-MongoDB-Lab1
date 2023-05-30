import { ServerUserArray } from '../interfaces/serverUserArray'
import { User } from '../models/users'

export const usersFactory = (paramArray: ServerUserArray): Array<User> => {
      const responseArray = paramArray.data.map((element) => {
          const nameSeparator = element.name.split(' ')
          let prefix = ''
          let firstName = ''
          let lastName = ''
          if (nameSeparator.length > 2) {
              prefix = nameSeparator[0]
              firstName = nameSeparator[1]
              lastName = nameSeparator[2]
          } else {
              prefix = ''
              firstName = nameSeparator[0]
              lastName = nameSeparator[1]
          }

          const userMap: User = {
              id: element.id,
              prefix,
              firstName,
              lastName,
              email: element.email,
              address:
                  `${element.address.street} ${element.address.suite} ${element.address.city} ${element.address.zipcode}`,
              geolocation:
                  `(${element.address.geo.lat},${element.address.geo.lng})`,
              companyName: element.company.name,
          }
          //userMap.id = element.id
          return userMap
      })
      return responseArray
  }