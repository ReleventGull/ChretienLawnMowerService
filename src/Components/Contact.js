import { useEffect, useState } from "react"
import { createInquiry } from "./api"
const Contact = () => {
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumbe] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastname] = useState('')
    const [address, setAddress] = useState('')
    const [addressTwo, setAddressTwo] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')

    const [emailError, setEmailError] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const [firstNameError, setfirstNameError] = useState('')
    const [addressError, setAddressError] = useState('')
    const [cityError, setCityError] = useState('')
    const [zipCodeError, setZipCodeError] = useState('')
    
    const commitFocus = () => {
        document.getElementsByClassName('contactBox')[0].style.opacity = 1
    }
    const commitBlur = () => {
        if(email||phoneNumber|| firstName|| lastName|| address|| addressTwo|| city|| zipCode) return
        document.getElementsByClassName('contactBox')[0].style.opacity = .6
    }

    
    const submitInquiry = async() => {
        const response = await createInquiry
        ({
            email: email, 
            phoneNumber: phoneNumber, 
            firstName: firstName,
            lastName: lastName,
            address: address,
            addressTwo: addressTwo,
            city: city,
            zipCode: zipCode
        })
        console.log(response)
        if(response.error) {
            if(response.body.firstNameError) {
                setfirstNameError(response.body.firstNameError)
            }
            if(response.body.phoneNumberError) {
                setPhoneNumberError(response.body.phoneNumberError)
            }
            if(response.body.emailError) {
                setEmailError(response.body.emailError)
            }
            if(response.body.addressError) {
                setAddressError(response.body.addressError)
            }
            if(response.body.cityError) {
                setCityError(response.body.cityError)
            }
            if(response.body.zipCodeError) {
                setZipCodeError(response.body.zipCodeError)
            }
        }
    }
    return (
        <div className="contactBox">
        <div className="caraBox">
            <div className="inputDivBox one">
                <div className="nameBox">
                    <div className="labelInputBox">
                        <label>First Name</label>
                        <input value={firstName} onChange={(e) => {setFirstName(e.target.value), setfirstNameError('')}} onBlur={() => commitBlur()} onFocus={() => commitFocus()}></input>
                    </div>
                    <div className="labelInputBox">
                        <label>Last Name</label>
                        <input value={lastName} onChange={(e) => setLastname(e.target.value)} onBlur={() => commitBlur()} onFocus={() => commitFocus()}></input>
                    </div>
                    <p className="errorText">{firstNameError}</p>
                </div>
            </div>
            <div className="inputDivBox two">
                <div className="labelInputBox">
                    <label>Phone Number</label>
                    <input value={phoneNumber} onChange={(e) => {setPhoneNumbe(e.target.value), setPhoneNumberError('')}} onBlur={() => commitBlur()} onFocus={() => commitFocus()}/>
                    {phoneNumberError}
                </div>
            </div>
            <div className="inputDivBox two">
                <div className="labelInputBox">
                    <label>Email</label>
                    <input value = {email} onChange={(e) => {setEmail(e.target.value), setEmailError('')}} onBlur={() => commitBlur()} onFocus={() => commitFocus()}/>
                    <p className="errorText">{emailError}</p>
                </div>
            </div>
            <div className="inputDivBox three">
                <div className="labelInputBox">
                    <label>Address Line 1 (required)</label>
                    <input value={address} onChange={(e) => {setAddress(e.target.value), setAddressError('')}} onBlur={() => commitBlur()} onFocus={() => commitFocus()}/>
                    <p className="errorText">{addressError}</p>
                </div>
            </div>
            <div className="inputDivBox four">
                <div className="labelInputBox">
                    <label>Address Line 2</label>
                    <input value={addressTwo} onChange={(e) => setAddressTwo(e.target.value)} onBlur={() => commitBlur()} onFocus={() => commitFocus()}/>
                </div>
            </div>
            <div className="inputDivBox five">
                <div className="nameBox">
                    <div className="labelInputBox">
                        <label>City (required) </label>
                        <input value={city} onChange={(e) => {setCity(e.target.value), setCityError('')}} onBlur={() => commitBlur()} onFocus={() => commitFocus()}></input>
                        
                    </div>
                    <div className="labelInputBox">
                        <label>ZIP Code (required)</label>
                        <input value={zipCode} onChange={(e) => setZipCode(e.target.value)} onBlur={() => commitBlur()} onFocus={() => commitFocus()}></input>
                    </div>
                </div>
                <div className="errorBox">
                        <div>
                            <p className="errorText">{cityError}</p>
                        </div>
                        <div>
                        <p style={{marginLeft: '.3rem'}} className="errorText">{zipCodeError}</p>
                        </div>
                    </div>
            </div>
            <button onClick={submitInquiry} className="bg-sky-500 hover:bg-sky-700">Get A Free Quote</button>
        </div>
        </div>
  
    )
}

export default Contact