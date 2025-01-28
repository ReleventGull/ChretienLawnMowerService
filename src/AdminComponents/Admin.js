import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Login, Dashboard } from './adminexports'
import { getAdmin } from './adminapi'
//Folder responsible for validating the token to make sure it still works

const Admin = () => {
    const navigate = useNavigate()

    const checkAdmin = async(token) => {
        const admin = await getAdmin({token: token})
        console.log(admin)
    }
    useEffect(() => {
        const token = localStorage.getItem("CLSToken")
        if(!token) {
            navigate('/admin/login')
        }else {
            checkAdmin(token)
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