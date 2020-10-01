import Leave from './leaveModel'

const makeLeaveDb = () => {
  async function insert({ ...details }) {
    const leave = new Leave({ ...details })
    await leave.save()
    return { leave }
  }

  async function findAll() {
    return Leave.find()
  }

  async function findByType({ type }) {
    return Leave.findOne({ type })
  }

  return Object.freeze({
    insert,
    findAll,
    findByType
  })
}

export default makeLeaveDb
