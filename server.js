require('noodle-it')
const express = require('express')
const remarkable = require('express-remarkable')

const app = express()
const port = process.env.PORT || 3001

app.engine('md', remarkable(app))

app.set('view engine', 'md')

app.get('/', (request, response) => {
  response.render('index')
})

app.get('/project-layout', (request, response) => {
  response.render('project-layout')
})


app.listen(port, () => console.log(`Listening on port ${port}`))
