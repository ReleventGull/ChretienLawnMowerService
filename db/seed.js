const {dropTables, createTables} = require('./initdb')
const client  = require('./index')
const {createUser} = require('./user')
const {createInquiry} = require('./inquiry')
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
const createTestInquiry = async() => {
    let today = new Date()
    const inquiry1 = await createInquiry({
        email: "test@exmaple.com",
        phoneNumber: 3333331234,
        firstName: "Carl",
        lastName: "Sega",
        address: "12345 Fuck you Street",
        addressTwo: "",
        city: "FuckCity",
        zipCode: 70000,
        date: today.getTime()
    })
}
const createDb = async() => {
    console.log("Creating database")
    await dropTables()
    await createTables()
    await createInitialUsers()
    await createTestInquiry()
}
client.connect()

createDb().finally(() => {
    console.log("Database created, closing client...")
    client.end()
})