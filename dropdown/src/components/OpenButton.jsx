import React from 'react'

import '../App.css'

export default function OpenButton({onClick}) {
    return (
        <button data-id='toggle'
                className='btn' 
                onClick={() => onClick()}>
            <span>Account Settings</span>
            <i className='material-icons'>public</i>
        </button>
    )
}
