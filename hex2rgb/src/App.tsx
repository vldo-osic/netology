import { useState } from 'react'

import './App.css'

export interface IForm {
    color: string
}

function App() {
    const [form, setForm] = useState<IForm>({
        color: '',
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setForm(prevForm => ({...prevForm, [name]: value}))
    }
    
    const colorToRGB = (color: string) => {
        const hexFormatRegExp = /^#([a-f0-9]{6})$/i
        if (hexFormatRegExp.test(color)) {
            return 'rgb(' 
                + color.match(/[a-f0-9]{2}/gi) || []
                       .map(hexCode => parseInt(hexCode, 16))
                       .join(',') 
                + ')'
        } else {
            return 'Ошибка!'
        }
    }

    return (
        <div className='app' style={colorToRGB(form.color) !== 'Ошибка!' ? 
                                    {backgroundColor: form.color} 
                                  : {backgroundColor: 'red'}}>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='color'></label>
                    <input
                        id='color' name='color'
                        type='text'
                        value={form.color}
                        onChange={handleChange}/>
                </form>
                <div className='rgb-color-area'>
                    <span>{colorToRGB(form.color)}</span>
                </div>
            </div>
        </div>
        
    )
}

export default App
