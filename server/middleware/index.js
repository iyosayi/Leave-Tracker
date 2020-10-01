import { JWT_SECRET } from '../config/keys'
import jwt from 'jsonwebtoken'
import { InvalidPropertyError, UnauthorizedError } from '../helpers/errors'
import wrapAsync from '../helpers/wrapAsync'

const decodeToken = (controller) => {
  return wrapAsync(async (httpRequest) => {
    const token = httpRequest.headers['x-auth-token']
    if (!token) {
      throw new UnauthorizedError('No token, authorization denied.')
    }
    const decoded = jwt.verify(token, JWT_SECRET)
    if (!decoded) {
      throw new InvalidPropertyError('No User with this token exists.')
    }
    httpRequest.user = decoded
    return controller(httpRequest)
  })
}

export default decodeToken
