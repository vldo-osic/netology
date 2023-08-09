import React from 'react'

import '../App.css'

export default function ProjectList({list}) {
    return (
        <div className='project-list'>
            {
                list.map( (project, index) => 
                    <img src={project.img} 
                         key={index}>
                    </img>)  
            }
        </div>
    )
}
