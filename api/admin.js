const express = require('express')
const adminRouter = express.Router();
const { getInquiriesByStatus, deleteInquiryById, getCountOfInquiriesByStatus, getAllInquries, deleteInquiry } = require('../db/inquiry')

adminRouter.get('/inquiryByStatus/:status', async (req, res, next) => {
    const {status} = req.params
    if(status == 'All') {
        const allInquiries = await getAllInquries()
        res.send({inquiries: allInquiries})
    }else {
        const inquiries = await getInquiriesByStatus({status: status})
        res.send({inquiries: inquiries})
    }
})

adminRouter.get('/inquiryCounts', async (req, res, next) => {
    const openInquiries = await getCountOfInquiriesByStatus({status: 'Open'})
    const completedInquiries = await getCountOfInquiriesByStatus({status: 'Completed'})
    const nonServicableInquries = await getCountOfInquiriesByStatus({status: 'Non-Servicable'})
    res.send({
    openInquiriesCount: openInquiries, 
    completedInquiriesCount: completedInquiries,
    nonServicableInquriesCount: nonServicableInquries
    })
})

adminRouter.post('/deleteInquiry/:id', async (req, res, next) => {
    const {id} = req.params
    const deletedInquiry = await deleteInquiryById({id: id})
    if(deletedInquiry) {
        res.send({inquiry: deletedInquiry})
    }else {
        res.send({message: "There is no inquiry with that ID."})
    }
})

module.exports = adminRouter