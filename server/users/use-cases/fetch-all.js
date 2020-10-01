const makeFetchAll = ({ usersDb, leaveDb }) => {
  return async function fetchAll() {
    const users = await usersDb.findAll()
    const leave = await leaveDb.findAll()

    const result = users.map((user) => {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }
    })
    return { result, leave }
  }
}

export default makeFetchAll
