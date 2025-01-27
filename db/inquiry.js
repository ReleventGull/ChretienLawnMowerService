const client = require('./index')

const createInquiry = async ({email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, cookie, date, expirationDate}) => {
    try { 
        console.log(email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, date)
        const {rows: [inquiry]} = await client.query(`
            INSERT INTO inquiry (email, "phoneNumber", "firstName", "lastName", address, "addressTwo", city, "zipCode", cookie, date, "expirationDate")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING *;
            `, [email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, cookie, date, expirationDate])
            console.log("After creation")
            return inquiry
    }catch(error) {
        console.error("There was an error creating the inquiry", error)
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
        console.error("There was an error deleting the inquiry in the database", error)
        throw error
    }
}

const getInquiryByCookie = async({cookie}) => {
    try {
        const {rows: [inquiry]} = await client.query(` 
            SELECT * FROM inquiry 
            WHERE cookie=$1;
            `, [cookie])
            return inquiry
    }catch(error) {
        console.error("There was an error getting the inquiry by the cookie", error)
        throw error
    }
}

const updateInquiry = async({id, phoneNumber, lastName, address, addressTwo, city, zipCode, date, expirationDate}) => {
    try {
        const {rows: [inquiry]} = await client.query(`
            UPDATE inquiry
            SET "phoneNumber"=$1, "lastName"=$2, address=$3, "addressTwo"=$4, city=$5, "zipCode"=$6, date=$7, "expirationDate"=$8
            WHERE id=$9 
            RETURNING *;
            `, [phoneNumber, lastName, address, addressTwo, city, zipCode, date, expirationDate, id])
            return inquiry
    }catch(error){
        console.error("There was an error updating inquiry", error )
        throw error
    }
}
module.exports = {
    createInquiry,
    deleteInquiry,
    getInquiryByCookie,
    updateInquiry
}