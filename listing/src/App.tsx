import './App.css'
import Listing from './components/Listing'
import data from './helpers/etsy.json'

import { IItem } from './types/types'

function App() {
    const items: IItem[] = data
    
    return (
        <Listing items={items}/>
    )
}

export default App
