require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

app.get('/', function (req, res) {
    // just for testing purposes
    res.send('hello')
})

app.post('/tx', function (req, res) {
    // just for testing purposes
    res.send('hello')
})

app.listen(process.env.PORT || 8000)