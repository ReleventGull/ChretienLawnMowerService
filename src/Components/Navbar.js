
const Navbar = () => {
     return (
        <div className="navBar">
            <div className="leftNavBox">
                <img className="logo" src="/images/Logo.png" />
            </div>
            <div className="rightNavBox">
                <div className="navButton">
                    <h3>Home</h3>
                </div>
                <div className="navButton">
                    <h3>About Us</h3>
                </div>
                <div className="navButton">
                    <h3>Contact Us</h3>
                </div>
                <div className="navButton phone">
                    <h3 >
                        337-368-7641
                    </h3>
                    
                </div>
  
            </div>
        </div>
     )
}

export default Navbar