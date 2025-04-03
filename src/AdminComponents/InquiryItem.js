

const InquiryItem = ({inquiry, setSelectedInquiry}) => {
    console.log(inquiry)
    return (
        <div onClick={() => setSelectedInquiry(inquiry)} className="inquiryItemContainer">
            <div>
                {inquiry.firstName}
            </div>
            <div>
                {inquiry.phoneNumber}
            </div>
            <div>
                {inquiry.address}
            </div>
            <div>
                <p className={`displayStatus ${inquiry.status}`}> {inquiry.status}</p>
               
            </div>
        </div>
    )
}

export default InquiryItem