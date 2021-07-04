import express from 'express'
import fs from 'fs'

const PORT = process.env.PORT || 3003
const app = express()

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'YOUR-DOMAIN.TLD') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/messages', (req, res) => {
  fs.readFile('server/messages.json', 'utf8', function (err, data) {
    res.json(JSON.parse(data))
  })
})
