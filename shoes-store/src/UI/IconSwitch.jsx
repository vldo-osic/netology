import React from 'react'

export default function IconSwitch({icon, onSwitch}) {
    
    return (
        <span className='material-icons view-icon'
              onClick={() => onSwitch()}>
            {icon}
        </span>
    )
}
