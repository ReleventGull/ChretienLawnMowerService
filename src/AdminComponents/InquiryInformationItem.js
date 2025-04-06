

const InquiryInformationItem = ({count, name, handleNavigate}) => {
    return (
        <div className="inquiryInformationItemContainer">
            <div className="inquiryInformationTop">
                <h1>{name}</h1>
                <h3>{count}</h3>
            </div>
            <div onClick={() => handleNavigate(name)} className="inquiryInformationBottom">
                <p>View Details</p>
            </div>
            
        </div>
    )
}

export default InquiryInformationItem