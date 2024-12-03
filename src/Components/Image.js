
const Images = ({imageSlideTick, imageIndex, img}) => {
    const imageStyle = {
        backgroundImage: `url(${img})`,
        display: 'absolute',
        width: '100%',
        height: '700px',
        flexGrow: '0',
        flexShrink: '0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        translate:`${-100 * imageIndex}%`, transition: "1s"
    }
    return (
        <div onClick={() => clearTimeout(imageSlideTick)} style={imageStyle}/>
 )
}

export default Images