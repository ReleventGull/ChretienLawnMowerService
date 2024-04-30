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
            <div className="inputDivBox one">
                <div className="nameBox">
                    <div className="labelInputBox">
                        <label>First Name</label>
                        <input></input>
                    </div>
                    <div className="labelInputBox">
                        <label>Last Name</label>
                        <input></input>
                    </div>
                </div>
            </div>
            <div className="inputDivBox two">
                <div className="labelInputBox">
                    <label>Phone Number</label>
                    <input/>
                </div>
            </div>
            <div className="inputDivBox two">
                <div className="labelInputBox">
                    <label>Email</label>
                    <input/>
                </div>
            </div>
            <div className="inputDivBox three">
                <div className="labelInputBox">
                    <label>Address Line 1 (required)</label>
                    <input/>
                </div>
            </div>
            <div className="inputDivBox four">
                <div className="labelInputBox">
                    <label>Address Line 2</label>
                    <input/>
                </div>
            </div>
            <div className="inputDivBox five">
                <div className="nameBox">
                    <div className="labelInputBox">
                        <label>City (required) </label>
                        <input></input>
                    </div>
                    <div className="labelInputBox">
                        <label>ZIP Code (required)</label>
                        <input></input>
                    </div>
                </div>
            </div>
            <button>Get A Free Quote</button>
        </div>
        
    </div>
    )
}
export default Vouch