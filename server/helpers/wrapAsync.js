import { makeHttpError } from './http-response'
import {
  InvalidPropertyError,
  UnauthorizedError,
  UniqueConstraintError,
  DatabaseError
} from './errors'

const wrapAsync = (fn) => (req, res, ...params) =>
  fn(req, res, ...params).catch((error) => {
    return makeHttpError({
      title: error.name,
      stack: error.stack,
      errorMessage: error.message,
      statusCode:
        error instanceof InvalidPropertyError
          ? 401
          : error.statusCode || error instanceof UniqueConstraintError
          ? 409
          : error.statusCode || error instanceof UnauthorizedError
          ? 401
          : error.statusCode || error instanceof DatabaseError
          ? 503
          : error.statusCode
    })
  })

export default wrapAsync
