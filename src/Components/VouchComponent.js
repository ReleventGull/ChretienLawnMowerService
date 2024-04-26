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
        <div className="vouchBox">
            <div className="vouchText">
                <h3>
                "{currentVouch ? currentVouch.message : ''}"
                <p>-Anonymous</p>
                </h3>

            </div>
        </div>
    )
}
export default Vouch