import {React, useEffect, useRef} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import {Navbar, Home, MainApp} from './Components/exports'

const App = () => {
    const imageSlideTick = useRef(null)
    const loc = useLocation()
    const nav = useNavigate()
    
    useEffect(() => {
        console.log(loc)
        if(loc.pathname == '/') {
            nav('/app/home')
        }
    }, [loc.pathname])
    
    return (
        <Routes>
            <Route path='app/*'  element={<MainApp />}/>
        </Routes>
    
    )
}

export default App