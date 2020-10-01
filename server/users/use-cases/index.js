import makeAddUser from './add-user'
import makeFetchAll from './fetch-all'
import usersDb from '../models/'
import leaveDb from '../../leaves/models'
import gravatar from 'gravatar'

const addUser = makeAddUser({ usersDb, gravatar })
const fetchAll = makeFetchAll({ usersDb, leaveDb })

export { addUser, fetchAll }
