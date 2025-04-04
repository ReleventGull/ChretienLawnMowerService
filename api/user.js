const express = require('express')
const bcrypt = require('bcrypt')
const userRouter = express.Router()
const {JWT_SECRET} = process.env
const {getUserByUsername, getUserById} = require('../db/user')
const jwt = require('jsonwebtoken')

userRouter.post('/login', async(req, res, next) => {
    const {username, password} = req.body
    const user = await getUserByUsername(username)
    if(!user) {
        res.send({status: 401, error: true, message: "Inccorrect username or password"})
        return
    }
    //If exists, will verify the password matches
    const checkBcryptPasswords = await bcrypt.compare(password, user.password)
    if(checkBcryptPasswords) {
        res.send({status: 200, message: `Welcome ${username}`, token: `${jwt.sign(user.id, JWT_SECRET)}`})
    }else {
        res.send({status: 401, error: true, message: "Inccorrect username or password"})
    }
})

userRouter.post('/me', async(req, res, next) => {
    const userId = req.user
    const user = await getUserById(userId)
    res.send({status: 200, user: user})
})
module.exports = userRouter