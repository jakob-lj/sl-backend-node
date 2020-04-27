const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/nb', (req, res) => {
    const inAYear = new Date()
    inAYear.setTime(inAYear.getTime() + 60*60*24*365)
    console.log(inAYear)
    res.setHeader('Set-Cookie', `lang=nb; HttpOnly; Path=/`)
      res.end()
  })

app.get('/en', (req, res) => {
    const inAYear = new Date()
    inAYear.setTime(inAYear.getTime() + 60*60*24*365)
    console.log(inAYear)
    res.setHeader('Set-Cookie', `lang=en; HttpOnly; Path=/`)
      res.end()
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
