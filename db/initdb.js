const client = require('./index')
const createTables = async() => {
    try {
        await client.query(`
          CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            "firstName" VARCHAR(255) NOT NULL,
            "lastName" VARCHAR(255),
            password VARCHAR(255) NOT NULL,
            "emailAddress" VARCHAR(255) UNIQUE NOT NULL,
            "phoneNumber" VARCHAR(255),
            "isAdmin" BOOLEAN DEFAULT true NOT NULL
        );
            `)
    }catch(error){
        console.error("There was an error creating the tables")
        throw error
    }
}

const dropTables = async() => {
    try {
        await client.query(`
            DROP TABLE IF EXISTS users;
            `)
    }catch(error) {
        console.error("There was an error dropping the tables")
        throw error
    }
}

module.exports = {
    createTables,
    dropTables
}