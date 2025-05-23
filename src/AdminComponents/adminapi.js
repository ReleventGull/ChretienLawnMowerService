

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

export const getInquiriesByStatus = async({token, status}) => {
     try {
        const response = await fetch(`${BASE_URL}/admin/inquiryByStatus/${status}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    }catch(error) {
        console.error("There was an error getting the inquiries by status in admin/adminapi", error)
        throw error
    }
}

export const changeInquiryStatus = async({status, id, token}) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/updateInquiry/${id}`,{
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: status
            })
        })
        const result = await response.json()
        return result
    }catch(error) {
        console.error("There was an error changing inquiry status in admin/adminapi.js", error)
        throw error
    }
}

export const searchInquiryByQuery = async({query, token, status}) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/searchInquiry/${query}`,{
            method: "POST",
            headers :{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: status
            })
        })
        const result = response.json();
        return result
    } catch(error) {
        console.error("There was an error searching inquiry by query in admin/adminapi.js", error)
    throw error
    }
}

export const deleteInquiry = async({token, id}) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/deleteInquiry/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response
    } catch(error) {
        console.error("There was an error deleting inquiry by id in admin/adminapi.js")
    }
}