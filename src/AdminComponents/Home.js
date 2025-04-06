import { useEffect, useState } from 'react'
import { getInquiryCounts } from './adminapi'
import { InquiryInformationItem } from './adminexports'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [openCounts, setOpenCounts] = useState('')
    const [completedCounts, setcompletedCounts] = useState('' )
    const [nonServicableCounts, setNonServicableCounts] = useState('')
    const nav = useNavigate()

    const handleNavigate = (status) => {
        nav('/admin/dashboard/inquiries', {state: {status: status}})
    }

    const fetchCounts = async() => {
        const token = localStorage.getItem("CLSToken")
        const response = await getInquiryCounts({token: token})
        setOpenCounts(response.openInquiriesCount)
        setcompletedCounts(response.completedInquiriesCount)
        setNonServicableCounts(response.nonServicableInquriesCount)
        
    }
    useEffect(() => {
        fetchCounts()
    }, [])
    return (
        <div className="adminHomeContainer">
            <div className="inquiryInformationContainer">
                {
                    openCounts === '' || completedCounts === '' || nonServicableCounts === '' ?
                    null
                    :
                    <>
                    <InquiryInformationItem handleNavigate={handleNavigate} count={openCounts} name={"Open"}/>
                    <InquiryInformationItem handleNavigate={handleNavigate} count={completedCounts} name={"Completed"}/>
                    <InquiryInformationItem handleNavigate={handleNavigate} count={nonServicableCounts} name={"Non-Servicable"}/>
                    </>
  
                }
                </div>
        </div>
    )
}

export default Home