import { useEffect, useState } from "react"
import { Contact, Images } from './exports'
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import image1 from './Images/House.png'
import image2 from './Images/House2.png'

const Vouch = ({imageSlideTick}) => {
    const [images, setImages] = useState([image1, image2])
    const [imageIndex, setImageIndex ] = useState(1)

    useEffect(() => {
        imageSlideTick = setTimeout(() => {
            if(imageIndex == images.length - 1) {
                setImageIndex(0)
            }else {
                setImageIndex(imageIndex + 1)
            }
        }, 5000)
    }, [imageIndex])

   const changeSlide = (val) => {
        clearTimeout(imageSlideTick)
        if (val > 0) {
            if(imageIndex == images.length - 1) {
                setImageIndex(0)
            }else {
                setImageIndex(imageIndex + val)
            }
        }else if (val < 0) {
            if(imageIndex == 0) {
                setImageIndex(images.length - 1)
            }else {
                setImageIndex(imageIndex + val)
            }
        }
        
   }

    return (
    <div className="caraselBox">
        <div onClick={() => changeSlide(-1)}className='arrowContainer left'>
            <ArrowBigLeft />
        </div>
        <div onClick={() => changeSlide(1)} className='arrowContainer right'>
            <ArrowBigRight />
        </div>
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