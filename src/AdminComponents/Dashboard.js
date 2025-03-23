
import  {Navbar } from './adminexports'
import { useEffect, useState } from 'react'
import { Route, useLocation, useNavigate, Routes } from 'react-router-dom'
const Dashboard = () => {
    const loc = useLocation();
    const navigate = useNavigate();
    const [location, setLocation] = useState('')
    useEffect(() => {
        if(loc.pathname === '/admin/dashboard') {
            navigate('home')
        }
        setLocation(loc.pathname)
    }, [])
    return(
        <div className="adminDashboardContainer">
            <Navbar location={location}/>
            <div className='dashboardComponentContainer'>
                <Routes>
                    <Route path='home' />
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard