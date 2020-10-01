import makeListLeaves from './list-leaves'
import makeAddLeave from './add-leave'
import leaveDb from '../models'

const addLeave = makeAddLeave({ leaveDb })
const listLeave = makeListLeaves({ leaveDb })

export { addLeave, listLeave }
