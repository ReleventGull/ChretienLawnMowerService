import { SearchSVG } from './AdmingSVGComponents/adminsvgexports'
const svgObject = {
    height: '1.5rem',
    width: '1.5rem',
}
const Inquiry = () => {
    return (
    <div className="inquiryHomeContainer">
        <div className="inquirySearchContainer">
            <div className="inquiryInputContainer">
                <SearchSVG svgObject={svgObject}/>
                <input placeholder='Search'></input>
            </div>
        </div>
    </div>
        
    )
}

export default Inquiry