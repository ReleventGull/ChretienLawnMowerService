const express = require('express')
const inquiryRouter = express.Router()
const {createInquiry, } = require('../db/inquiry')
const validator = require('validator')
inquiryRouter.post('/create', async (req, res, next) => {
        const {email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode} = req.body
        const date = new Date()
        const todayDate = date.getTime()
        const inquiry = await createInquiry({
                email: email, 
                phoneNumber: phoneNumber,
                firstName: firstName, 
                lastName: lastName, 
                address: address, 
                addressTwo: addressTwo, 
                city: city, 
                zipCode: zipCode,
                date: todayDate,
            })
            res.send({status: 200, msg:"Inquiry Created"})
        
})


inquiryRouter.post('/validate', async (req, res, next) => {
    //User must send this:
    //email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, date
    //Required: email OR phone number, firstname, address, city, zipCode, 
    //Date will be automatically computed on the server
    let error = false
    let errorObject = {}
    const {email, phoneNumber, firstName, address, city, zipCode} = req.body
    console.log(req.body)
    const checkEmail = validator.isEmail(email)
    const checkPhoneNumber = validator.isMobilePhone(`${phoneNumber}`, 'en-US')
    if(!checkEmail) {
        error = true
        errorObject.emailError = "Please enter a valid email address"
    }
    if(!checkPhoneNumber) {
        error = true
        errorObject.phoneNumberError = "Please enter a valid phone number"
    }
    if(!firstName) {
        error = true
        errorObject.firstNameError = "Please enter a valid first name"
    }
    if(!address) {
        error = true
        errorObject.addressError = "Please enter a valid address"
    }
    if(!city) {
        error = true
        errorObject.cityError = "Please enter a valid city"
    }
    if(!zipCode) {
        error = true
        errorObject.zipCodeError = "Please enter a valid zip code,"
    }
    if(error) {
        res.send( {
            error: "There was an error validating inquiry.",
            status: 400,
            body: errorObject
        })
    }else {
        res.send({status: 200, msg:"Information Validated"})
    }
})


module.exports = inquiryRouter
