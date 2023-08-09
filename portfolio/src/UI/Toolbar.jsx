import React from 'react'

import '../App.css'

export default function Toolbar({filters, selected, onSelectFilter}) {

    return (
        <div className='toolbar'>
            {
                filters.map((filter, index) => 
                    <div className={'toolbar__filter' + ((filter === selected) ? '_selected' : '')}
                         onClick={() => onSelectFilter(filter)}
                         key={index}>
                        <span>{filter}</span>
                    </div>
                )
            }
        </div>
    )
}
