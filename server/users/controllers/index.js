import makePostUser from './post-user'
import makeGetUsers from './get-users'
import { addUser, fetchAll } from '../use-cases'

const postUser = makePostUser({ addUser })
const getUsers = makeGetUsers({ fetchAll })

export { postUser, getUsers }
