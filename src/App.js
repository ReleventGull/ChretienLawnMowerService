import {React, useEffect, useRef} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import {Navbar, Home} from './Components/exports'

const App = () => {
    const imageSlideTick = useRef(null)
    const loc = useLocation()
    const nav = useNavigate()
    useEffect(() => {
        if(loc.pathname = '/') {
            nav('home')
        }
    }, [loc.pathname])
    return (
        <>
        <Navbar/>
        <div className="pageWrap">
            <Routes>
                <Route path="/home" element={<Home imageSlideTick={imageSlideTick}/>}/>
            </Routes>
        </div>
        </>
        


    )
}

export default App