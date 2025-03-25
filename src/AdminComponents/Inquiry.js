import { SearchSVG } from './AdmingSVGComponents/adminsvgexports'
import { SelectOption } from './adminexports'
import { useEffect, useState } from 'react'
const svgObject = {
    height: '1.5rem',
    width: '1.5rem',
}
const Inquiry = () => {
    const [currentOption, setCurrentOption] = useState('Open')
    
    return (
    <div className="inquiryHomeContainer">
        <div className="inquirySearchContainer">
            <div className="inquiryInputContainer">
                <SearchSVG svgObject={svgObject}/>
                <input placeholder='Search'></input>
            </div>
            <SelectOption />
        </div>
    </div>
        
    )
}

export default Inquiry