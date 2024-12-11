const express = require('express')
const userRouter = express.Router()
const {getUserByUsername} = require('../db/user')
userRouter.post('/login', async(req, res, next) => {
    const {username, password} = req.body
    const user = getUserByUsername(username)
    if(!user) {
        res.send({error: true, message: "Inccorrect username or password"})
    }
})

module.exports = userRouter