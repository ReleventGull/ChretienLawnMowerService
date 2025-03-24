

const InquiryInformationItem = ({count, name}) => {
    return (
        <div className="inquiryInformationItemContainer">
            <div className="inquiryInformationTop">
                <h1>{name}</h1>
                <h3>{count}</h3>
            </div>
            <div className="inquiryInformationBottom">
                <p>View Details</p>
            </div>
            
        </div>
    )
}

export default InquiryInformationItem