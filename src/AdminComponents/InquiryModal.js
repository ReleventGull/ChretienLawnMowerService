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
                    <p><strong>Status:</strong> <span className={`displayStatus ${selectedInquiry.status}`}> {selectedInquiry.status}</span></p>
                </div>
                <div></div>
            </div>
        </div>,
        document.getElementById("portal")
    )
}
export default InquiryModal