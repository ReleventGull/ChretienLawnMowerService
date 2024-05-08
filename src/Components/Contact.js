const Contact = () => {
    const commitFocus = () => {
        document.getElementsByClassName('contactBox')[0].style.opacity = 1
    }
    const commitBlur = () => {
        document.getElementsByClassName('contactBox')[0].style.opacity = .6
    }
    return (
        <div>
        <div className="contactBox">
        <div className="caraBox">
            <div className="inputDivBox one">
                <div className="nameBox">
                    <div className="labelInputBox">
                        <label>First Name</label>
                        <input onBlur={() => commitBlur()} onFocus={() => commitFocus()}></input>
                    </div>
                    <div className="labelInputBox">
                        <label>Last Name</label>
                        <input onBlur={() => commitBlur()} onFocus={() => commitFocus()}></input>
                    </div>
                </div>
            </div>
            <div className="inputDivBox two">
                <div className="labelInputBox">
                    <label>Phone Number</label>
                    <input onBlur={() => commitBlur()} onFocus={() => commitFocus()}/>
                </div>
            </div>
            <div className="inputDivBox two">
                <div className="labelInputBox">
                    <label>Email</label>
                    <input onBlur={() => commitBlur()} onFocus={() => commitFocus()}/>
                </div>
            </div>
            <div className="inputDivBox three">
                <div className="labelInputBox">
                    <label>Address Line 1 (required)</label>
                    <input onBlur={() => commitBlur()} onFocus={() => commitFocus()}/>
                </div>
            </div>
            <div className="inputDivBox four">
                <div className="labelInputBox">
                    <label>Address Line 2</label>
                    <input onBlur={() => commitBlur()} onFocus={() => commitFocus()}/>
                </div>
            </div>
            <div className="inputDivBox five">
                <div className="nameBox">
                    <div className="labelInputBox">
                        <label>City (required) </label>
                        <input onBlur={() => commitBlur()} onFocus={() => commitFocus()}></input>
                    </div>
                    <div className="labelInputBox">
                        <label>ZIP Code (required)</label>
                        <input onBlur={() => commitBlur()} onFocus={() => commitFocus()}></input>
                    </div>
                </div>
            </div>
            <button className="bg-sky-500 hover:bg-sky-700">Get A Free Quote</button>
        </div>
        </div>
        </div>
    )
}

export default Contact