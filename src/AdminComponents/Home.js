import { useEffect } from 'react'
import { getInquiryCounts } from './adminapi'
const Home = () => {
    const fetchCounts = async() => {
        const token = localStorage.getItem("CLSToken")
        console.log("Token here", token)
        const response = await getInquiryCounts({token: token})
        console.log("RESOPNSE", response)
    }
    useEffect(() => {
        fetchCounts()
    }, [])
    return (
        <div className="adminHomeContainer">
            <div className="inquriyInformationContainer">
            
            </div>
        </div>
    )
}

export default Home