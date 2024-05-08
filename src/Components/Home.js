import {Vouch, Landscape, HomeFooter} from './exports'

const Home = ({imageSlideTick}) => {
    return (
        <div className="routePage home">
           <Vouch imageSlideTick={imageSlideTick}/>
           <Landscape />
           <HomeFooter />
        </div>
    )
}

export default Home