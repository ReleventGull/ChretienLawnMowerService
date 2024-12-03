import { Link } from "react-router-dom"
const HomeFooter = () => {
    return (
        <div className='homeFooterContainer'>
             <footer className="homeFooter">
                <Link>Contact</Link>
                <Link>Facebook</Link>
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