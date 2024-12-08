import {Contact} from './exports'
import {Vouch, HomeFooter, Map, Service} from './exports'


const Home = ({imageSlideTick}) => {
    return (
        <div className="routePage home">
           <Vouch imageSlideTick={imageSlideTick}/>
           <Service />
           <Map /> 
           <Contact />
           <HomeFooter />
        </div>
    )
}

export default Home