import express from 'express'
import router from './src/routes/routes.js'
import cors from 'cors'

const app = express()

// CORS
app.use(cors())

// Settings
const port = process.env.PORT || 3000

// middlewares
app.use(express.json())

// routes
app.use('/api/v1', router)

// static files
app.get('/', (req, res) => {
  res.send('Hello World! soy cesar')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
