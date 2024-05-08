import { useEffect, useState } from "react"
import { Contact, Images } from './exports'
import image1 from './Images/House.png'
import image2 from './Images/House2.png'

const Vouch = ({imageSlideTick}) => {
    const [images, setImages] = useState([image1, image2])
    const [imageIndex, setImageIndex ] = useState(1)

    useEffect(() => {
        imageSlideTick = setTimeout(() => {
            console.log(imageIndex)
            if(imageIndex == images.length - 1) {
                setImageIndex(0)
            }else {
                setImageIndex(imageIndex + 1)
            }
        }, 5000)
    }, [imageIndex])

    return (
    
    <div className="caraselBox">
        <div className="imageSliderContainer">
            {images.map((img) =>
            <Images img={img} imageIndex={imageIndex} imageSlideTick  = {imageSlideTick}/>
        )}
            
        </div>
        
        <Contact />
    </div>
    )
}
export default Vouch    