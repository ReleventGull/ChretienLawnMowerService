require('dotenv').config()
const express = require('express')
const cors = require('cors');
const morgan = require('morgan')

const app = express()
let port = 4000
app.listen(port, () => {
    console.log("I'm listening now on port", port)
})

app.use(cors())
app.use(express.static(require('path').join(__dirname, 'build')));
app.use(morgan('dev'))
app.use(express.json())