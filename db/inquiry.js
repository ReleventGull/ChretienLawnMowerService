const client = require('./index')

const createInquiry = async ({email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, date}) => {
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
        console.error("There was an error creating the inquiry", error)
        throw error
    }
}

module.exports = {
    createInquiry
}