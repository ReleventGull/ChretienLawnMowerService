const {dropTables, createTables} = require('./initdb')
const client  = require('./index')

const createDb = async() => {
    console.log("Creating database")
    await dropTables()
    await createTables()
}
client.connect()

createDb().finally(() => {
    console.log("Database created, closing client...")
    client.end()
})