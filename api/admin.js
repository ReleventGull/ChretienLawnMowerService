const express = require('express')
const adminRouter = express.Router();
const { getInquiriesByStatus, getCountOfInquiriesByStatus } = require('../db/inquiry')

adminRouter.post('/getInquiryByStatus/:status', async (req, res, next) => {
    const {status} = req.params
    console.log("STATUS", status)
    const inquries = await getInquiriesByStatus({status: status})
    res.send({inquries: inquries})
})

adminRouter.post('/getInquryCounts', async (req, res, next) => {
    const openInquiries = await getCountOfInquiriesByStatus({status: 'Open'})
    const completedInquiries = await getCountOfInquiriesByStatus({status: 'Completed'})
    const nonServicableInquries = await getCountOfInquiriesByStatus({status: 'Non-Servicable'})
    res.send({
    openInquiriesCount: openInquiries, 
    completedInquiriesCount: completedInquiries,
    nonServicableInquriesCount: nonServicableInquries
    })
})

module.exports = adminRouter