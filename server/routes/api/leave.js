import makeExpressController from '../../express'
import { postLeave, getLeaves } from '../../leaves/controllers'
export const path = '/leaves'
export const config = (router) => {
  router
    .post('/', makeExpressController(postLeave))
    .get('/', makeExpressController(getLeaves))
  return router
}
