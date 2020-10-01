import makeExpressCallback from '../../express'
import { postLogin, getUsers } from '../../auth/controllers'
import decodeToken from '../../middleware'

export const path = '/auth'
export function config(router) {
  router
    .get('/', makeExpressCallback(decodeToken(getUsers)))
    .post('/', makeExpressCallback(postLogin))
  return router
}
