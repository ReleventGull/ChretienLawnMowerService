


const SelectOption = ({setCurrentOption}) => {

    return (
        <select onChange={(e) => setCurrentOption(e.target.value)} className="optionDropdown">
            <option className="option" selected>All</option>
            <option className="option">Open</option>
            <option className="option">Completed</option>
            <option className="option">Archived</option>
            <option className="option">Non Servicable</option>
        </select>
    )
}
export default SelectOption