import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/keys'

const utils = (function () {
  function hashPassword(password) {
    return bcrypt.hash(password, 10)
  }

  function validatePassword(password1, password2) {
    return bcrypt.compare(password1, password2)
  }

  function createToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '2d' })
  }

  function sendToken(payload) {
    const token = createToken(payload)
    return JSON.stringify({ status: 'OK', token })
  }

  return {
    hashPassword,
    validatePassword,
    createToken,
    sendToken
  }
})()

export default utils
