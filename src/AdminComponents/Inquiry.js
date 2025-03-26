import { SearchSVG } from './AdmingSVGComponents/adminsvgexports'
import { SelectOption, InquiryItem } from './adminexports'
import { useEffect, useState } from 'react'
import { getInquiriesByStatus } from './adminapi'

const svgObject = {
    height: '1.5rem',
    width: '1.5rem',
}
const Inquiry = () => {
    const [currentOption, setCurrentOption] = useState('All')
    const [currentInquiries, setCurrentInquiries] = useState([])
    
    const fetchInqurieies = async() => {
        const token = localStorage.getItem("CLSToken")
        const fetchedInquiries = await getInquiriesByStatus({token: token, status: currentOption})
        console.log("FD", fetchedInquiries)
        setCurrentInquiries(fetchedInquiries.inquiries)
    }

    useEffect(() => {
        fetchInqurieies()
    }, [])

    return (
    <div className="inquiryHomeContainer">
        <div className="inquirySearchContainer">
            <div className="inquiryInputContainer">
                <SearchSVG svgObject={svgObject}/>
                <input placeholder='Search'></input>
            </div>
            <SelectOption />
        </div>
        <div className='inquiryDisplayContainer'>
            <div className='inquiryDetails'>
                <div>
                    <h3>Name</h3>
                </div>
                <div>
                    <h3>Phone</h3>
                </div>
                <div>
                    <h3>Address</h3>
                </div>
                <div>
                    <h3>Status</h3>
                </div>
            </div>
            <div className='inquiryList'>
                {
                    currentInquiries.map(inquiry =>
                        <InquiryItem inquiry={inquiry}/>
                    )
                }
            </div>
        </div>  
    </div>
        
    )
}

export default Inquiry