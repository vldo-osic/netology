import React, { useState } from 'react'

import Toolbar from '../UI/Toolbar'
import ProjectList from './ProjectList'
import getProjectList from '../helpers/projectList'
import '../App.css'

export default function Portfolio() {
    const [selectedFilter, setSelectedFilter] = useState('All')

    return (
        <div className='portfolio'>
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selectedFilter}
                onSelectFilter={(filter) => {setSelectedFilter(filter)}}/>
            <ProjectList list={getProjectList(selectedFilter)}/>
        </div>

    )
}
