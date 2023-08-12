import React, { useState } from 'react'

import '../App.css'

export default function DropDownItem({info, index, setActive, activeIndex}) {

    return (
        <li className={index === activeIndex ? 'active' : ''}
            onClick={() => setActive(index)}>
                <a href="#">{info}</a>
        </li>
    )
}
