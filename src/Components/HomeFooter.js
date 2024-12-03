import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const HomeFooter = () => {
    const nav = useNavigate()
    const redirectToFacebook = () => {
       window.location.href = 'https://www.facebook.com/people/Chretien-Lawn-Care-Service-LLC/100055266442758/?mibextid=JRoKGi&rdid=R5ukdEeosytuSz6c&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AtC5JacuA%2F%3Fmibextid%3DJRoKGi'
    }
    return (
        <div className='homeFooterContainer'>
             <footer className="homeFooter">
                <Link to='/contact'>Contact</Link>
                <Link onClick={redirectToFacebook} >Facebook</Link>
                <Link>Terms</Link>
                <Link>Privacy</Link>
            </footer>
            <div className='footerLogoBox'>
                <img className='footerLogo' src='images/Logo.png'/>
                <a>© 2024 Chretien LLC</a>
            </div>
        </div>
       

    )
}
export default HomeFooter