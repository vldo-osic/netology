import DropDown from "./DropDown"
import OpenButton from "./OpenButton"

import '../App.css'
import { useState } from "react"

function DropDownList() {
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = () =>
        setIsOpen(!isOpen)
    return (
        <div className="container">
            <div data-id="wrapper" className="dropdown-wrapper open">
                <OpenButton onClick={handleClick}/>
                {isOpen ? <DropDown/> : <></>}
            </div>
        </div>
    )
}

export default DropDownList
