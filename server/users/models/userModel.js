const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: false,
    Default: Date.now
  }
})
const User = mongoose.model('User', UserSchema)
module.exports = User
