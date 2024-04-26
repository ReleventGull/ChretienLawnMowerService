import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Navbar} from './Components/exports'

const App = () => {
    return (
        <>
        <Navbar/>
        <div className="pageWrap">
            <Routes>
                <Route path="/home" />
            </Routes>
        </div>
        </>
        


    )
}

export default App