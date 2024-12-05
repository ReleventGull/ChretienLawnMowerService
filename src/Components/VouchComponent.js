import { useEffect, useRef, useState } from "react"
import { Contact, Images } from './exports'
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import Swiper from 'swiper/bundle'
import 'swiper/css';
import 'swiper/css/navigation'
import image1 from './Images/House.png'
import image2 from './Images/House2.png'
import image3 from './Images/House3.png'
import image4 from './Images/Truck.png'
const Vouch = ({imageSlideTick}) => {
    const [images, setImages] = useState([image1, image2, image3])
    const [imageIndex, setImageIndex ] = useState(1)
    const swipeRef = useRef(null)
    useEffect(() => {
        swipeRef.current = new Swiper('.swiper', {
            loop: true, // Enables looping
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
            speed: 800,
            autoplay: {
              delay: 8000,
            },
          });
    }, [])

    const scrollDown = () => {
        const [contactBox] = document.getElementsByClassName('contactBox')
        const [inputToFocus] = document.getElementsByClassName('inputToFocus')
        contactBox.scrollIntoView({behavior: 'smooth'})
        setTimeout(() => {
            inputToFocus.focus()
        }, 800)
    }

    return (
        <div style={{width: '100%', position: 'relative'}}>
            <div style={{height: '500px', width: '60rem', borderRadius: '10px', }} className="swiper">

            <div className="swiper-wrapper">

            <div style={{backgroundImage: `url(${image1})`, backgroundSize: 'cover', borderRadius: '10px'}} className="swiper-slide"></div>
            <div style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover', borderRadius: '10px'}}className="swiper-slide"></div>
            <div style={{backgroundImage: `url(${image3})`, backgroundSize: 'cover', borderRadius: '10px'}} className="swiper-slide"></div>
            <div style={{backgroundImage: `url(${image4})`, backgroundSize: 'cover', borderRadius: '10px'}} className="swiper-slide"></div>
            
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-scrollbar"></div>
            <div className="vouchQuoteBox">
                <h1>Lawn Care For Everyone!</h1>
                <button onClick={scrollDown} className="getQuoteButton">Get A Free Quote</button>
            </div>
            </div>
        </div>

    )
}
export default Vouch    