

const InquiryItem = ({inquiry, setSelectedInquiry}) => {
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
                <span className={`displayStatus ${inquiry.status}`}> {inquiry.status}</span>
               
            </div>
        </div>
    )
}

export default InquiryItem