const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.use('/', routes)

app.listen(8080, () => {
  console.log("Server is starting at port 8080")
})
