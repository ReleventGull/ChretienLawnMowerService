import { Link } from "react-router-dom"
const Navbar = () => {
     return (
        <div className="navBar">
            {/* <div className="leftNavBox">
                <img className="logo" src="/images/Logo.png" />
            </div> */}
            <div className="rightNavBox">
                <Link to="/home" className="navButton">
                    <h3>Home</h3>
                </Link>
                <Link to="/about" className="navButton">
                    <h3>About Us</h3>
                </Link>
                <Link to="/contact" className="navButton">
                    <h3>Contact Us</h3>
                </Link>
                <Link className="navButton phone">
                    <img className="phoneLogo" src='images/Phone.png'/>
                    <h3>337-368-7641
                    </h3>
                    
                </Link>
  
            </div>
        </div>
     )
}

export default Navbar