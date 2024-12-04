const {dropTables, createTables} = require('./initdb')
const client  = require('./index')
const {createUser} = require('./user')

const createInitialUsers = async() => {
    console.log("Creating users")
    const userJaron = await createUser(
        {
        username:"Jaronian", 
        firstName: "Jaron",
        lastName: "Chretien",
        password: "Jaron1210",
        emailAddress: "jaronchretien@yahoo.com",
        phoneNumber: 3373687641
        })
    console.log("user creation complete")
}

const createDb = async() => {
    console.log("Creating database")
    await dropTables()
    await createTables()
    await createInitialUsers()
}
client.connect()

createDb().finally(() => {
    console.log("Database created, closing client...")
    client.end()
})