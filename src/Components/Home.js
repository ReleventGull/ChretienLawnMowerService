import {Vouch, Landscape, HomeFooter, Map} from './exports'


const Home = ({imageSlideTick}) => {
    return (
        <div className="routePage home">
           <Vouch imageSlideTick={imageSlideTick}/>
           <Map />
           <Landscape />
           <HomeFooter />
        </div>
    )
}

export default Home