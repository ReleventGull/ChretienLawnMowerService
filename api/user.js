const express = require('express')
const userRouter = express.Router()

userRouter.post('/login', async(req, res, next) => {
    console.log("Im hit")
})

module.exports = userRouter