import User from './userModel'

const makeUsersDb = ({ hashPassword, createToken }) => {
  async function insert({ ...details }) {
    if (details.password) {
      details.password = await hashPassword(details.password)
    }
    const user = new User({ ...details })
    const payload = {
      id: user._id
    }
    const token = await createToken(payload)
    await user.save()
    return { user, token }
  }

  async function findAll() {
    return User.find()
  }

  async function findById({ id: _id }) {
    return User.findById(_id)
  }

  async function findByEmail({ email }) {
    return User.findOne({ email })
  }

  return Object.freeze({
    insert,
    findAll,
    findById,
    findByEmail
  })
}

export default makeUsersDb
