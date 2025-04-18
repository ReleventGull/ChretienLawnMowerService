
import  { Navbar, Home, Inquiry } from './adminexports'
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
    }, [loc.pathname])

    return(
        <div className="adminDashboardContainer">
            <Navbar setLocation={setLocation} location={location}/>
            <div className='dashboardComponentContainer'>
                <Routes>
                    <Route path='home' element={<Home />}/>
                    <Route path='inquiries' element={<Inquiry />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard