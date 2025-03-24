import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Login, Dashboard } from './adminexports'
import { getAdmin } from './adminapi'
//Folder responsible for validating the token to make sure it still works

const Admin = () => {
    const navigate = useNavigate()
    const loc = useLocation()
    const checkAdmin = async(token) => {
        console.log(loc)
        const admin = await getAdmin({token: token})
        if(admin.status == 200 && (loc.pathname=='/admin/login' || loc.pathname=='/admin' )){
            navigate('/admin/dashboard')
        }else if(admin.status !== 200){
            navigate('/admin/login')
        }
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
                <Route path='dashboard/*' element={<Dashboard/>}/>

            </Routes>
        </div>

    )
}

export default Admin