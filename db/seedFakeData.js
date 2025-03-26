const client = require('./index')
const { createInquiry } = require('./inquiry')

const seedFakeData = async() => {
    const todayDay = new Date()
    const date = todayDay.getTime();
    const test1 = await createInquiry({
        firstName: "Jaron",
        email: "jaronchretien@yahoo.com",
        phoneNumber: 3373687641,
        lastName: "Chretien",
        address: "256 N Cutting Ave",
        addressTwo: '',
        city: "Jennings",
        zipCode: 70546,
        date: date
    })
    const test2 = await createInquiry({
        firstName: "Emily",
        email: "emily.smith@gmail.com",
        phoneNumber: 2256781234,
        lastName: "Smith",
        address: "123 Oak St",
        addressTwo: "Apt 4B",
        city: "Baton Rouge",
        zipCode: 70810,
        date: date
    });
    
    const test3 = await createInquiry({
        firstName: "Michael",
        email: "michael.johnson@hotmail.com",
        phoneNumber: 3185559876,
        lastName: "Johnson",
        address: "456 Maple Ave",
        addressTwo: '',
        city: "Shreveport",
        zipCode: 71105,
        date: date
    });
    
    const test4 = await createInquiry({
        firstName: "Sophia",
        email: "sophiawilliams@aol.com",
        phoneNumber: 5042345678,
        lastName: "Williams",
        address: "789 Cypress Rd",
        addressTwo: "Unit 12",
        city: "New Orleans",
        zipCode: 70115,
        date: date
    });
    
    const test5 = await createInquiry({
        firstName: "Ethan",
        email: "ethan.miller@yahoo.com",
        phoneNumber: 9857776543,
        lastName: "Miller",
        address: "101 Pine Dr",
        addressTwo: '',
        city: "Houma",
        zipCode: 70360,
        date: date
    });
    
    const test6 = await createInquiry({
        firstName: "Olivia",
        email: "olivia.davis@outlook.com",
        phoneNumber: 3378904567,
        lastName: "Davis",
        address: "202 Birch Ln",
        addressTwo: "Suite 3",
        city: "Lafayette",
        zipCode: 70501,
        date: date
    });
    
    const test7 = await createInquiry({
        firstName: "James",
        email: "james.moore@icloud.com",
        phoneNumber: 2259012345,
        lastName: "Moore",
        address: "303 Cedar Ave",
        addressTwo: '',
        city: "Denham Springs",
        zipCode: 70726,
        date: date
    });
    
    const test8 = await createInquiry({
        firstName: "Ava",
        email: "ava.taylor@gmail.com",
        phoneNumber: 3185678901,
        lastName: "Taylor",
        address: "404 Spruce St",
        addressTwo: "Apt 2C",
        city: "Alexandria",
        zipCode: 71301,
        date: date
    });
    
    const test9 = await createInquiry({
        firstName: "William",
        email: "will.brown@hotmail.com",
        phoneNumber: 5046784321,
        lastName: "Brown",
        address: "505 Redwood Blvd",
        addressTwo: '',
        city: "Kenner",
        zipCode: 70062,
        date: date
    });
    
    const test10 = await createInquiry({
        firstName: "Emma",
        email: "emma.wilson@yahoo.com",
        phoneNumber: 9858907654,
        lastName: "Wilson",
        address: "606 Magnolia Ct",
        addressTwo: "Unit 5A",
        city: "Slidell",
        zipCode: 70458,
        date: date
    });
    console.log("Fake data complete")
}

client.connect()
seedFakeData().then(() => {
    client.end()
})