const express  = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', require('./routers/camdigikey-router'))

app.listen(8000, () => {
  console.log('Server is running on 8000...')
})
