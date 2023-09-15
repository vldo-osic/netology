import './App.css'
import { Card } from './components/Card'
function App() {
    
    return (
        <div className='container'>
            <Card cardTitle='Card title' 
                  cardText='Some quick example text to build on the card title and make up the bulk of the cards content.'
                  buttonText='Go somewhere'>
                    <img src="https://i.pinimg.com/originals/1f/32/de/1f32de75ae0a1ac218a902f6f361a6d7.jpg" 
                         style={{maxHeight: 400}}
                         className="card-img-top" alt="..."></img>
            </Card>
            <Card cardTitle='Card title' 
                  cardText='Some quick example text to build on the card title and make up the bulk of the cards content.'
                  buttonText='Go somewhere'/>
        </div>
    )
}

export default App
