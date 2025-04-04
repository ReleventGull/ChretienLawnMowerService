import { SearchSVG } from './AdmingSVGComponents/adminsvgexports'
import { SelectOption, InquiryItem, InquiryModal } from './adminexports'
import { useEffect, useState } from 'react'
import { getInquiriesByStatus, changeInquiryStatus } from './adminapi'

const svgObject = {
    height: '1.5rem',
    width: '1.5rem',
}
const Inquiry = () => {
    const [currentOption, setCurrentOption] = useState('All')
    const [currentInquiries, setCurrentInquiries] = useState([])
    const [selectedInquiry, setSelectedInquiry] = useState(null)
    
    const fetchInqurieies = async() => {
        const token = localStorage.getItem("CLSToken")
        const fetchedInquiries = await getInquiriesByStatus({token: token, status: currentOption})
        setCurrentInquiries(fetchedInquiries.inquiries)
    }

    const updateInquiry = async({status}) => {
        const token = localStorage.getItem("CLSToken")
        const response = await changeInquiryStatus({token: token, status: status, id: selectedInquiry.id})
        setSelectedInquiry(response.inquiry)
        if(currentOption === 'All' || currentOption === response.inquiry.status) {
            for(let i = 0; i < currentInquiries.length; i++) {
                if(currentInquiries[i].id === response.inquiry.id) {
                    currentInquiries[i].status = response.inquiry.status
                }
            }
        }else {
            for(let i = 0; i < currentInquiries.length; i++) {
                if(currentInquiries[i].id === response.inquiry.id) {
                    currentInquiries.splice(i, i+1)
                }
            }
        }
    }

    useEffect(() => {
        fetchInqurieies()
    }, [currentOption])

    return (
    <div className="inquiryHomeContainer">
        {selectedInquiry ? <InquiryModal updateInquiry={updateInquiry} selectedInquiry={selectedInquiry} setSelectedInquiry={setSelectedInquiry}/> : null}
        <div className="inquirySearchContainer">
            <div className="inquiryInputContainer">
                <SearchSVG svgObject={svgObject}/>
                <input placeholder='Search'></input>
            </div>
            <SelectOption setCurrentOption={setCurrentOption}/>
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
                        <InquiryItem setSelectedInquiry={setSelectedInquiry} inquiry={inquiry}/>
                    )
                }
            </div>
        </div>  
    </div>
        
    )
}

export default Inquiry