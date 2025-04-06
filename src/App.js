import {React, useEffect, useRef} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import {Navbar, Home, MainApp} from './Components/exports'
import Admin from './AdminComponents/Admin'
const App = () => {
    const imageSlideTick = useRef(null)
    const loc = useLocation()
    const nav = useNavigate()
    
    useEffect(() => {
        if(loc.pathname == '/') {
            nav('/app/home')
        }
    }, [loc.pathname])
    
    return (
        <Routes>
            <Route path="admin/*" element={<Admin />}/>
            <Route path='app/*'  element={<MainApp />}/>
        </Routes>
    
    )
}

export default App