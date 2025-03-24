import { useEffect, useState } from 'react'
import { getInquiryCounts } from './adminapi'
import { InquiryInformationItem } from './adminexports'
const Home = () => {
    const [openCounts, setOpenCounts] = useState('')
    const [completedCounts, setcompletedCounts] = useState('' )
    const [nonServicableCounts, setNonServicableCounts] = useState('')

    const fetchCounts = async() => {
        const token = localStorage.getItem("CLSToken")
        const response = await getInquiryCounts({token: token})
        console.log('Response here', response)
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
                    <InquiryInformationItem count={openCounts} name={"Open"}/>
                    <InquiryInformationItem count={completedCounts} name={"Completed"}/>
                    <InquiryInformationItem count={nonServicableCounts} name={"Non-Servicable"}/>
                    </>
  
                }
                </div>
        </div>
    )
}

export default Home