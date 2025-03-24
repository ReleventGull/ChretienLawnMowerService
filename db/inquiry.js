const client = require('./index')

const createInquiry = async ({email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, date, }) => {
    try { 
        console.log(email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, date)
        const {rows: [inquiry]} = await client.query(`
            INSERT INTO inquiry (email, "phoneNumber", "firstName", "lastName", address, "addressTwo", city, "zipCode", date)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;
            `, [email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, date])
            console.log("After creation")
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

module.exports = {
    createInquiry,
    deleteInquiry,
    getInquiriesByStatus,
    getCountOfInquiriesByStatus,
    getAllInquries
}