import {Contact} from './exports'
import {GetAFreeQuote, HomeFooter, Map, Service} from './exports'


const Home = () => {
    return (
        <div className="routePage home">
            <GetAFreeQuote />
           <Service />
           <Map /> 
           <Contact />
           <HomeFooter />
        </div>
    )
}

export default Home