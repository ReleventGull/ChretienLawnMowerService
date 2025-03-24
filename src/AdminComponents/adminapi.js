const {REACT_APP_BASE_URL = 'http://localhost:4000/api' } = process.env
const BASE_URL = REACT_APP_BASE_URL

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

export const getAdmin = async({token}) => {
    try {
        const response = await fetch(`${BASE_URL}/user/me`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': "application/json",
            },  
        })
        const data = response.json()
        return data
    }catch(error) {
        console.error("There was an error logining in on the api frontend", error)
        throw error
    }
}

export const getInquiryCounts = async({token}) => {
    console.log("TOKEN IN API", token)
    try {
        const response = await fetch(`${BASE_URL}/admin/inquiryCounts`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = response.json()
        return data
    }catch(error) {
        console.error("There was an error getting inquirycounts", error)
        throw error
    }
}