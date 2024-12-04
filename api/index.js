const express = require('express')
const apiRouter = express.Router()
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = process.env



// apiRouter.use(async(req, res, next) => {
//     const auth = req.header('Authorization')
//     if(auth) {
//         try {
//             let tok = auth.split(' ')
//             const [,token] = tok
//             const {id} = jwt.verify(token, JWT_SECRET)
//             req.user = await getUserById(id)
//             next()
//         }catch(error) {
//             console.error("Token invalid", error) 
//             throw error
//         }
//     }else {
//         next()
//     }
// })
const inquiryRouter = require('./inquiry')

apiRouter.use('/inquiry', inquiryRouter)

module.exports = apiRouter