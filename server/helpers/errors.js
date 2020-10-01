class RequiredParameterError extends Error {
  constructor(param) {
    super(`${param} cannot be null or undefined.`)

    this.name = 'RequiredParameterError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequiredParameterError)
    }
  }
}

class UniqueConstraintError extends Error {
  constructor(value) {
    super(`${value} already exists.`)

    this.name = 'UniqueConstraintError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UniqueConstraintError)
    }
  }
}

class InvalidPropertyError extends Error {
  constructor(msg) {
    super(msg)

    this.name = 'InvalidPropertyError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidPropertyError)
    }
  }
}

class UnauthorizedError extends Error {
  constructor(message, statusCode = 401) {
    super(message)
    this.name = 'UnauthorizedError'
    this.statusCode = statusCode

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UniqueConstraintError)
    }
  }
}

class DatabaseError extends Error {
  constructor(message, statusCode = 503) {
    super(message)
    this.name = 'MongoDBError'
    this.statusCode = statusCode

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DatabaseError)
    }
  }
}

export {
  RequiredParameterError,
  InvalidPropertyError,
  UniqueConstraintError,
  UnauthorizedError,
  DatabaseError
}
