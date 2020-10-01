import mongoose from 'mongoose'
import { DatabaseError } from '../helpers/errors'
import { DB_URL } from '../config/keys'

async function setupDB() {
  await mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Connected to DB')
    })
    .catch((error) => {
      throw new DatabaseError(error.message)
    })
}

export default setupDB
