

const InquiryItem = ({inquiry}) => {
    console.log(inquiry)
    return (
        <div className="inquiryItemContainer">
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