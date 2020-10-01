import { InvalidPropertyError } from '../../helpers/errors'

const makeGetUser = ({ usersDb }) => {
  return async function listUser({ id } = {}) {
    const user = await usersDb.findById({ id })
    if (!user) {
      throw new InvalidPropertyError('User does not exist.')
    }

    return user
  }
}

export default makeGetUser
