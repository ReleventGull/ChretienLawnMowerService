import { useEffect, useState} from "react"
import image1 from './Images/House.png'
import image2 from './Images/House2.png'
const Images = ({imageSlideTick}) => {
    const [images, setImages] = useState([image1, image2])
    const [imageIndex, setImageIndex ] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            console.log(imageIndex)
            if(imageIndex == images.length - 1) {
                setImageIndex(0)
            }else {
                setImageIndex(imageIndex + 1)
            }
        }, 5000)
    }, [imageIndex])
    return (
        images.map((img, ind) => 
            <img className="images" src={img} style={{translate:
            `${-100 * imageIndex}%`, transition: "2s"}}/>
        )
        
    )
}

export default Images