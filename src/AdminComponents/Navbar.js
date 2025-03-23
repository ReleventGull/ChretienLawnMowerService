import { Link } from "react-router-dom"
import {HomeSVG, EnvelopeSVG} from './AdmingSVGComponents/adminsvgexports'
const svgObject = {
    width: '24px',
    height: '24px',
    SVGColor: '#FFFFFF',
    SVGColorSelect: '#0d0d0d'
}
const Navbar = ({location}) => {
    return (
        <div className="adminNavbar">
            <div className='navbarLinkContainer'>
                <Link to='home' className={`adminNavLink ${location === '/admin/dashboard/home' ? 'active' : ''}`}>
                    <HomeSVG svgObject={svgObject}/>
                    <div>Home</div>
                </Link>
                <Link to='inquiries' className={`adminNavLink ${location === '/admin/dashboard/inqiries' ? 'active' : ''}`}>
                    <EnvelopeSVG svgObject={svgObject}/>
                    <div>Inquiries</div>
                </Link>
            </div>
        </div>
    )
}
export default Navbar