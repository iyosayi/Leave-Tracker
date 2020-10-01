import makeLoginUser from './login'
import makeGetUser from './get-user'
import utils from '../../validations/utils'
import usersDb from '../../users/models'

const sendToken = utils.sendToken
const validatePassword = utils.validatePassword

const loginUser = makeLoginUser({ usersDb, validatePassword, sendToken })
const listUser = makeGetUser({ usersDb })

export { loginUser, listUser }
