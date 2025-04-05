const client = require('./index')

const createInquiry = async ({email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, date, }) => {
    try { 
       const {rows: [inquiry]} = await client.query(`
            INSERT INTO inquiry (email, "phoneNumber", "firstName", "lastName", address, "addressTwo", city, "zipCode", date)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;
            `, [email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, date])
            return inquiry
    }catch(error) {
        console.error("There was an error creating the inquiry in inquiry/db", error)
        throw error
    }
}

const deleteInquiry = async({id}) => {
    try {
        const {rows: [inquiry]} = await client.query(`
            DELETE FROM inquiry 
            WHERE id=$1
            RETURNING *;
            `, [id])
            return inquiry
    }catch(error) {
        console.error("There was an error deleting the inquiry in the inquiry/db", error)
        throw error
    }
}

const getInquiriesByStatus = async({status}) => {
    try {
        const {rows: inquries} = await client.query(`
            SELECT * FROM  
            inquiry 
            WHERE status = $1;
            `, [status])
            return inquries
    }catch(error) {
        console.error("There was an error getting inquries by status in inquiry/db", error)
    }
}

const getCountOfInquiriesByStatus = async({status}) => {
    try {
        const {rows: [count]} = await client.query(`
            SELECT COUNT(*) FROM  
            inquiry 
            WHERE status = $1;
            `, [status])
            return count.count
    }catch(error) {
        console.error("There was an error getting inquries by status in inquiry/db", error)
    }
}

const getAllInquries = async() => {
    try {
        const {rows: inquries} = await client.query(`
            SELECT * FROM inquiry;
            `)
            return inquries
    }catch(error) {
        console.error("There was an error getting all inquires in db/inquiry", error)
        throw error
    }
}

const deleteInquiryById = async({id}) => {
    try {
        const {rows: [inquiry]} = await client.query(`
            DELETE from inquiry 
            WHERE id=$1
            RETURNING *;
            `, [id])
            return inquiry
    }catch(error) {
        console.error("There was an error deleting the inquiry by ID in db/inquiry", error)
        throw error
    }
}

const changeInquiryStatusById = async({id, status}) => {
    try {
        const {rows: [inquiry]} = await client.query(`
            UPDATE inquiry 
            SET status = $1
            WHERE id = $2
            RETURNING *;
            `, [status, id])
            return inquiry
    }catch(error) {
        console.error("There was an error changing the status by id", error)
        throw error
    }
}

const getInquiryById = async({id}) => {
    try {
        const {rows: [inquiry]} = await client.query(`
            SELECT * FROM inquiry WHERE id = $1;
            `, [id])
            return inquiry
    }catch (error) {
        console.error("There was an error getting inquiry by id in db/inquiry", error)
        throw error
    }
}

const getInquiriesBySearchQuery = async({searchQuery, status}) => {
    console.log("In db", searchQuery)
    try {
        const {rows: inquires} = await client.query(
            `SELECT * FROM inquiry 
            WHERE 
            (
                email ILIKE '%' || $1 || '%' OR
                "phoneNumber" ILIKE '%' || $1 || '%' OR
                "firstName" ILIKE '%' || $1 || '%' OR
                "lastName" ILIKE '%' || $1 || '%' OR
                address ILIKE '%' || $1 || '%' OR
                "addressTwo" ILIKE '%' || $1 || '%' OR
                city ILIKE '%' || $1 || '%' OR
                "zipCode" ILIKE '%' || $1 || '%'
            )
            AND (
                $2 = 'All' OR status = $2
            );  
            `, [searchQuery, status]
        )
        console.log(inquires)
        return inquires
    } catch(error) {
        console.error("There was an error getting inquiries by search in db/inquiry", error)
        throw error
    }
}

module.exports = {
    createInquiry,
    deleteInquiry,
    getInquiriesByStatus,
    getCountOfInquiriesByStatus,
    getAllInquries,
    deleteInquiryById,
    changeInquiryStatusById,
    getInquiryById,
    getInquiriesBySearchQuery
}