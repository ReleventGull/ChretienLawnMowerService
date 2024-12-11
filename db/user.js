const client = require('./index')

const createUser = async({username, firstName, lastName, password, emailAddress, phoneNumber}) => {
    try {
        const {rows: [user]} = await client.query(`
            INSERT INTO users (username, "firstName", "lastName", password, "emailAddress", "phoneNumber")
            VALUES($1, $2, $3, $4, $5, $6)  
            RETURNING  *;
            `, [username, firstName, lastName, password, emailAddress, phoneNumber])
            return user
    }catch(error) {
        console.error("There was an error creating user", error)
        throw error
    }
}

const getUserByUsername = async(username) => {
    try {
        const {rows: [user]} = await client.query(`
            SELECT * FROM users WHERE username = $1;
            `, [username])
            return user
    }catch(error){
        console.error("There was an error getting user by username in DB", error)
        throw error
    }
}

module.exports = {
    createUser,
    getUserByUsername
}