import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import setupDB from './server/database'

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000
require('./server/routes/api')(app)

setupDB().then(() => {
  app.listen(PORT, () => console.log('Server started'))
})

module.exports = app
