import makePostLogin from './post-login'
import getLoggedInUser from './getLoggedUser'
import { loginUser, listUser } from '../use-cases'

const postLogin = makePostLogin({ loginUser })
const getUsers = getLoggedInUser({ listUser })

export { postLogin, getUsers }
