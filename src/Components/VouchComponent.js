import { useEffect, useState } from "react"
import { Contact, Images } from './exports'
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import Swiper from 'swiper/bundle'
import 'swiper/css';
import 'swiper/css/navigation'
import image1 from './Images/House.png'
import image2 from './Images/House2.png'
import image3 from './Images/House3.png'
const Vouch = ({imageSlideTick}) => {
    const [images, setImages] = useState([image1, image2, image3])
    const [imageIndex, setImageIndex ] = useState(1)
    
    const swiper = new Swiper('.swiper', {
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        speed: 800,
        autoplay: {
            delay: 8000,
          },
      
      });
    

    return (
        <div style={{width: '100%', position: 'relative'}}>
            <div style={{height: '500px', width: '60rem', borderRadius: '10px', }} className="swiper">

            <div className="swiper-wrapper">

            <div style={{backgroundImage: `url(${image1})`, backgroundSize: 'cover', borderRadius: '10px'}} className="swiper-slide"></div>
            <div style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover', borderRadius: '10px'}}className="swiper-slide"></div>
            <div style={{backgroundImage: `url(${image3})`, backgroundSize: 'cover', borderRadius: '10px'}} className="swiper-slide"></div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-scrollbar"></div>
            </div>
            <Contact />
        </div>

    )
}
export default Vouch    