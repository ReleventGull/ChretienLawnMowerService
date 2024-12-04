const {REACT_APP_BASE_URL = 'http://localhost:4000/api' } = process.env
const BASE_URL = REACT_APP_BASE_URL

export const createInquiry = async({email, phoneNumber, firstName, lastName, address, addressTwo, city, zipCode}) => {
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
                zipCode: zipCode
            })
        }).then(result => result.json())
        return response
    }catch(error) {
        console.error("There was an error creating the inquiry on the frontend api.", error)
        throw error
    }
}