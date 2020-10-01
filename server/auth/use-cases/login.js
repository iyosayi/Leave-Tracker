import validateLoginInput from '../../validations/login'
import { UnauthorizedError, InvalidPropertyError } from '../../helpers/errors'

const makeLoginUser = ({ usersDb, validatePassword, sendToken }) => {
  return async function loginUser({ ...details }) {
    const { errors, isValid } = validateLoginInput({ ...details })
    if (!isValid) {
      const errorResult = Object.keys(errors)
      errorResult.map((key) => {
        const value = errors[key]
        throw new UnauthorizedError(value)
      })
    }

    const { email, password } = details
    const user = await usersDb.findByEmail({ email })
    if (!user) {
      throw new InvalidPropertyError('User does not exist.')
    }

    const isMatch = await validatePassword(password, user.password)
    if (!isMatch) {
      throw new InvalidPropertyError('Password is incorrect.')
    }
    const payload = {
      id: user._id
    }

    return sendToken(payload)
  }
}

export default makeLoginUser
