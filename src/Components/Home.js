import {Contact} from './exports'
import {Vouch, HomeFooter, Map, Service} from './exports'


const Home = () => {
    return (
        <div className="routePage home">
           <Service />
           <Map /> 
           <Contact />
           <HomeFooter />
        </div>
    )
}

export default Home