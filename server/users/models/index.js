import makeUsersDb from './userDb'
import utils from '../../validations/utils'

const createToken = utils.createToken
const hashPassword = utils.hashPassword

const usersDb = makeUsersDb({ createToken, hashPassword })

export default usersDb
