import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Navbar, Home} from './Components/exports'

const App = () => {
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

export default App