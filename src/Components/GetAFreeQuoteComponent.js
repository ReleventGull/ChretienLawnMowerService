
const GetAFreeQuote = () => {
    const scrollDown = () => {
        const [contactBox] = document.getElementsByClassName('contactBox')
        const [inputToFocus] = document.getElementsByClassName('inputToFocus')
        contactBox.scrollIntoView({behavior: 'smooth'})
        setTimeout(() => {
            inputToFocus.focus()
        }, 800)
    }
    return (
        <div className="getFreeQuoteContainer">
           <div className="vouchQuoteBox">
                <h1>Lawn Care For Everyone!</h1>
                <button onClick={scrollDown} className="getQuoteButton">Get A Free Quote</button>
            </div>
        </div>
    )
}

export default GetAFreeQuote