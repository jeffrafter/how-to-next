require('noodle-it')
const express = require('express')

const app = express()
const port = process.env.PORT || 3001


app.get('/', (req, res) => {
  res.send('How to next')
})

app.listen(port, () => console.log(`Listening on port ${port}`))