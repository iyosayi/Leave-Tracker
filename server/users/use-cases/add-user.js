import validateRegisterInput from '../../validations/register'
import {
  InvalidPropertyError,
  UniqueConstraintError
} from '../../helpers/errors'

const makeAddUser = ({ usersDb, gravatar }) => {
  return async function addUser({ ...details }) {
    const { errors, isValid } = validateRegisterInput({ ...details })
    const { email, name, password } = details

    if (!isValid) {
      const errorResult = Object.keys(errors)
      errorResult.map((key) => {
        const value = errors[key]
        throw new InvalidPropertyError(value)
      })
    }
    const exists = await usersDb.findByEmail({ email })
    if (exists) {
      throw new UniqueConstraintError('Email')
    }
    const avatar = gravatar.url(email.toLowerCase())
    return usersDb.insert({
      name,
      email,
      password,
      avatar
    })
  }
}

export default makeAddUser
