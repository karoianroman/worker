import express from 'express'
import { parseMessage } from './worker.js'

const app = express()
app.use(express.json())

app.post('/', (req, res) => {
  try {
    const data = parseMessage(req.body)
    console.log(`📨 Received message: ${data}`)
    res.status(200).send('OK')
  } catch (err) {
    console.error(`❌ ${err.message}`)
    res.status(400).send(err.message)
  }
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`🚀 Worker listening on port ${PORT}`)
})