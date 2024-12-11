const express = require('express')
const userRouter = express.Router()

userRouter.post('/login', async(req, res, next) => {
    const {username, password} = req.body
    
})

module.exports = userRouter