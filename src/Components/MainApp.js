import {React, useEffect, useRef} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import {Navbar, Home} from './exports'

const MainApp = () => {
    return (
        <>
        <Navbar/>
        <div className="pageWrap">
            <Routes>
                <Route path="/home" element={<Home />}/>
            </Routes>
        </div>
        </>
    )
}


export default MainApp