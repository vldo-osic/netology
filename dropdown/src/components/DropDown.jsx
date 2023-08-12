import React, { useState } from 'react'

import '../App.css'
import DropDownItem from './DropDownItem'

export default function DropDown() {
    const [infoObj, setInfoObj] = useState({
        activeIndex: 0,
        info: ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out']
    })
    
    const handleSetActive = (index) =>
        setInfoObj({...infoObj, activeIndex: index})

    return (
        <ul data-id='dropdown' className='dropdown'>
            {
                infoObj.info.map((inf, index) => 
                    <DropDownItem info={inf} 
                                  key={index}
                                  index={index}
                                  setActive={(index) => handleSetActive(index)}
                                  activeIndex={infoObj.activeIndex}/>    
                )
            }
        </ul>
    )
}
