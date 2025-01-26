const {REACT_APP_BASE_URL = 'http://localhost:4000/api' } = process.env
const BASE_URL = REACT_APP_BASE_URL

export const validateInquiry = async({email, phoneNumber, firstName, address, city, zipCode}) => {
    try {
        const response = await fetch(`${BASE_URL}/inquiry/validate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  // Add the Content-Type header
            },
            body: JSON.stringify({
                email: email,
                firstName: firstName,
                phoneNumber: phoneNumber,
                address: address,
                city: city,
                zipCode: zipCode
            })
        }).then(result => result.json())
        return response
    }catch(error) {
        console.error("There was an error validating the inquiry on the front end.", error)
        throw error
    }
}

export const createInquiry = async({email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode, cookie, expirationDate}) => {
    try {
        const response = await fetch(`${BASE_URL}/inquiry/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  // Add the Content-Type header
            },
            body: JSON.stringify({
                email: email,
                firstName: firstName,
                phoneNumber: phoneNumber,
                lastName: lastName,
                address: address,
                addressTwo: addressTwo,
                city: city,
                zipCode: zipCode,
                cookie: cookie,
                expirationDate: expirationDate
            })
        }).then(result => result.json())
        return response
    }catch(error) {
        console.error("There was an error creating the inquiry on the frontend api.", error)
        throw error
    }
}

export const adminLogin = async({username, password}) => {
    try {
        const response = await fetch(`${BASE_URL}/user/login`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },  
            body: JSON.stringify({
                password: password,
                username: username
            })
        })
        const data = response.json()
        return data
    }catch(error) {
        console.error("There was an error logining in on the api frontend", error)
        throw error
    }
}