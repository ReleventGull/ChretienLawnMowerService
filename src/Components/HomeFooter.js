import { Link } from "react-router-dom"
const HomeFooter = () => {
    return (
        <footer className="homeFooter">
            <div className="socialFooter">
                <h4>Follow Us</h4>
                    <div className="socialImageBox">
                        <img src='images/TikTok.png'/>
                        <img src='images/Facebook.png'/>
                    </div>
            </div>
            <div className="socialFooter">
                <h4>Support</h4>
                <div className="supportList"> 
                    <Link>Home</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link>FAQ</Link>
                </div>
            </div>
        </footer>

    )
}
export default HomeFooter