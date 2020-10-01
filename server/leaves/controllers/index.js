import makePostLeave from './post-leave'
import makeGetLeaves from './get-leaves'
import { addLeave, listLeave } from '../use-cases'

const postLeave = makePostLeave({ addLeave })
const getLeaves = makeGetLeaves({ listLeave })

export { postLeave, getLeaves }
