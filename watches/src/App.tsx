
import { useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import { IWatch } from './components/Watch'

function App() {

    const [watches, setWatches] = useState([])

    const addWatch = (watch: IWatch) => {
        setWatches(prevWatches => ({...prevWatches, watch}))
    }
    console.log(watches)
    return (
        <div>
            <Form onSubmit={addWatch}/>   
        </div>
    )
}

export default App
