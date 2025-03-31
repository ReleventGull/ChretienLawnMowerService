

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
                {inquiry.status}
            </div>
        </div>
    )
}

export default InquiryItem