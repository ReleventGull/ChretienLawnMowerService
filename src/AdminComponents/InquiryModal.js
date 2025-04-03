import ReactDOM from 'react-dom'

const InquiryModal = ({selectedInquiry, setSelectedInquiry}) => {
    console.log(selectedInquiry)
    
    return ReactDOM.createPortal(
        <div className="inquiryModalContainer">
            <div className="selectedInquiryContainer">
                <div className='topSelectedInquiryContainer'>
                    <h2>Inquiry Details</h2>
                    <button onClick={() => setSelectedInquiry(null)} className="closeButton">✕</button>
                </div>
                <div className='selectedInquiryInformation'>
                    <p><strong>Name:</strong> {selectedInquiry.firstName}</p>
                    <p><strong>Address:</strong> {selectedInquiry.address}</p>
                    <p><strong>Address Two:</strong> {selectedInquiry.addressTwo}</p>
                    <p><strong>Email:</strong> {selectedInquiry.email}</p>
                    <p><strong>Email:</strong> {selectedInquiry.phoneNumber}</p>
                    <p><strong>Date Submitted:</strong> {new Date(parseInt(selectedInquiry.date)).toLocaleDateString()}</p>
                        <div>
                        <strong>Status:</strong> <select className={`displayStatus ${selectedInquiry.status}`}>
                            <option value="Open" className={`displayStatus Open`} selected>Open</option>
                            <option value="Closed" className={`displayStatus Closed`}>Closed</option> 
                            <option value="Completed" className={`displayStatus Completed`}>Completed</option> 
                            <option value="Non-Servicable" className={`displayStatus Non-Servicable`}>Non-Servicable</option> 
                        </select>
                        </div>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    )
}
export default InquiryModal