


const SelectOption = ({setCurrentOption, currentOption}) => {
    return (
        <select onChange={(e) => setCurrentOption(e.target.value)} className="optionDropdown">
            <option className="option" selected={currentOption == "All" ? true : false}>All</option>
            <option className="option" selected={currentOption == "Open" ? true : false}>Open</option>
            <option className="option" selected={currentOption == "Completed" ? true : false}>Completed</option>
            <option className="option" selected={currentOption == "Non-Servicable" ? true : false}>Non Servicable</option>
        </select>
    )
}
export default SelectOption