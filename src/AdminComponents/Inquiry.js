import { SearchSVG } from './AdmingSVGComponents/adminsvgexports'
import { SelectOption, InquiryItem, InquiryModal } from './adminexports'
import { useEffect, useState } from 'react'
import { getInquiriesByStatus, changeInquiryStatus, searchInquiryByQuery, deleteInquiry } from './adminapi'




const svgObject = {
    height: '1.5rem',
    width: '1.5rem',
}
const Inquiry = () => {
    const [currentOption, setCurrentOption] = useState('All')
    const [currentInquiries, setCurrentInquiries] = useState([])
    const [selectedInquiry, setSelectedInquiry] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
   
    const fetchInqurieies = async() => {
        const token = localStorage.getItem("CLSToken")
        const fetchedInquiries = await getInquiriesByStatus({token: token, status: currentOption})
        setCurrentInquiries(fetchedInquiries.inquiries)
    }

    const fetchInqurieiesBySearchQuery = async() => {
        const token = localStorage.getItem("CLSToken")
        const fetchedInquiries = await searchInquiryByQuery({token: token, status: currentOption, query: searchQuery})
        setCurrentInquiries(fetchedInquiries.inquiries)
    }

    const removeInquiry = async() => {
        const token = localStorage.getItem("CLSToken")
        const response = await deleteInquiry({token: token, id: selectedInquiry.id})
        console.log("Resonse here", response)
        if(response.status === 200) {
            setSelectedInquiry(null)
            console.log("STATUS IS BROOO", currentInquiries.length)
            for(let i = 0; i < currentInquiries.length; i++) {
                console.log("In da loop")
                if (currentInquiries[i].id == selectedInquiry.id) {
                    console.log("Found match")
                    currentInquiries.splice(i, 1)
                    setCurrentInquiries(currentInquiries)
                }
            }
        }
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
        console.log("Am I running")
        if(searchQuery == '') {
            fetchInqurieies()
        }else {
            fetchInqurieiesBySearchQuery()
        }
        
    }, [currentOption, searchQuery])


    return (
    <div className="inquiryHomeContainer">
        {selectedInquiry ? <InquiryModal removeInquiry={removeInquiry} updateInquiry={updateInquiry} selectedInquiry={selectedInquiry} setSelectedInquiry={setSelectedInquiry}/> : null}
        <div className="inquirySearchContainer">
            <div className="inquiryInputContainer">
                <SearchSVG svgObject={svgObject}/>
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search'></input>
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