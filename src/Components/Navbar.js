import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'
const list = ['home', 'about', 'contact']
const Navbar = () => {
    const [active, setActive] = useState('')
    
    const loc = useLocation()
    
    useEffect(() => {
        console.log(loc)
        setActive(loc.pathname)
    }, [loc.pathname])
     
    return (
        <div className="navBar">
            {/* <div className="leftNavBox">
                <img className="logo" src="/images/Logo.png" />
            </div> */}
            <div className="rightNavBox">
                {list.map(item => 
                    <Link to={item} className={'navButton' + (`/${item}` == active ? ' active' : '')}>
                            <h3>{item[0].toUpperCase() + item.slice(1) + (item == 'about' || item == 'contact' ? ' Us' : '')}</h3>
                    </Link>
                )}
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