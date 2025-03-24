const express = require('express')
const adminRouter = express.Router();
const { getInquiriesByStatus } = require('../db/inquiry')

adminRouter.post('/getInquriyByStatus/:status', async (req, res, next) => {
    const {status} = req.params
    console.log("STATUS", status)
    const inquries = await getInquiriesByStatus({status: status})
    res.send({inquries: inquries})
})

module.exports = adminRouter