import {React, useRef} from "react";

import {Routes, Route} from 'react-router-dom'
import {Navbar, Home} from './Components/exports'

const App = () => {
    const imageSlideTick = useRef(null)
    
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