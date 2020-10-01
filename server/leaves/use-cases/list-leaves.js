const makeListLeaves = ({ leaveDb }) => {
  return async function listLeaves() {
    return leaveDb.findAll()
  }
}

export default makeListLeaves
