const express = require('express')
const apiRouter = express.Router()
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = process.env



apiRouter.use(async(req, res, next) => {
    const auth = req.header('Authorization')
    if(auth) {
        try {
            let tok = auth.split(' ')
            const [,token] = tok
            const verified = jwt.verify(token, JWT_SECRET)
            req.user = verified
            next()
        }catch(error) {
            console.error("Token invalid", error) 
            throw error
        }
    }else {
        next()
    }
})
const inquiryRouter = require('./inquiry')
const userRouter = require('./user')

apiRouter.use('/inquiry', inquiryRouter)
apiRouter.use('/user', userRouter)
module.exports = apiRouter