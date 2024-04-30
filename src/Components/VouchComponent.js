import { useEffect, useState } from "react"
import Vouches from '../Vouches'

const Vouch = () => {
    const [vouches, setVouches] = useState([])
    const [currentVouch, setCurrentVouch] = useState('')
    
    useEffect(() => {
        setVouches(Vouches)
        setCurrentVouch(Vouches[0])
    }, [])
    
    return (
        !vouches ? null : 
    
    <div className="caraselBox">
        {/* <img src=''/> */}
        <div className="grayCover"/>
        <div className="caraBox one">
            <h1>Chretien Lawn Care Service</h1>
        </div>
        <div className="caraBox two">
            <button>Get A Free Quote</button>
        </div>
        
    </div>
    )
}
export default Vouch