import { useEffect, useState} from "react"
import image1 from './Images/House.png'
import image2 from './Images/House2.png'
const Images = ({imageSlideTick, imageIndex, img}) => {
    return (
        <img onClick={() => clearTimeout(imageSlideTick)} className="images" src={img} style={{translate:`${-100 * imageIndex}%`, transition: "1s"}}/>
 )
}

export default Images