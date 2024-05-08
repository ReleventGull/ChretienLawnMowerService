import { useEffect, useState } from "react"
import { Contact, Images } from './exports'

const Vouch = ({imageSlideTick}) => {

    
    return (

    <div className="caraselBox">
        <div className="imageSliderContainer">
            <Images imageSlideTick  ={imageSlideTick}/>
        </div>
        
        <Contact />
    </div>
    )
}
export default Vouch    