import {Contact} from './exports'
import {Vouch, Landscape, HomeFooter, Map} from './exports'


const Home = ({imageSlideTick}) => {
    return (
        <div className="routePage home">
           <Vouch imageSlideTick={imageSlideTick}/>
           <Map /> 
           <Contact />
           <HomeFooter />
        </div>
    )
}

export default Home