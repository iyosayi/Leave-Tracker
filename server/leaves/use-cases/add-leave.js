import validateLeaveInput from '../../validations/leave'
import {
  InvalidPropertyError,
  UniqueConstraintError
} from '../../helpers/errors'

const makeAddLeave = ({ leaveDb }) => {
  return async function addLeave({ ...details }) {
    console.log({ details })
    const { errors, isValid } = validateLeaveInput({ ...details })
    if (!isValid) {
      const errorResult = Object.keys(errors)
      errorResult.map((key) => {
        const value = errors[key]
        throw new InvalidPropertyError(value)
      })
    }
    const { type, start, end } = details
    const exists = await leaveDb.findByType({ type })
    if (exists) {
      throw new UniqueConstraintError('Leave')
    }
    return leaveDb.insert({
      type,
      start,
      end
    })
  }
}

export default makeAddLeave
