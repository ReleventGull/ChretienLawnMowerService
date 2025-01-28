import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Login, Dashboard } from './adminexports'
//Folder responsible for validating the token to make sure it still works

const Admin = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("CLSToken")
        if(!token) {
            navigate('/admin/login')
        }else {
            //get token valiation
            //if not valid, delete token and redirect to login
            //if valid, check if user is on login page or empty page
            //If on empty page, redirect to home.
        }    
    }, [])

    return (
        <div className='adminPage'>
            <Routes>
                <Route path='login' element={<Login />}/>
                <Route path='dashboard' element={<Dashboard/>}/>

            </Routes>
        </div>

    )
}

export default Admin