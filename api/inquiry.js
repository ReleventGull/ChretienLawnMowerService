const express = require('express')
const inquiryRouter = express.Router()
const {createInquiry} = require('../db/inquiry')

inquiryRouter.post('/create', async (req, res, next) => {
    //User must send this:
    //email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, date
    //Required: email OR phone number, firstname, address, city, zipCode, 
    //Date will be automatically computed on the server
    res.send({msg: "Sending creation"})
})

module.exports = inquiryRouter
