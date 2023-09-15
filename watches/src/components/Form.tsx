import { useState } from "react"
import { IWatch } from "./Watch"



export const Form = (onSubmit: (watch: IWatch) => void) => {
    const [form, setForm] = useState<IWatch>({
        id: '',
        location: '',
        timezoneOffset: ''
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(form)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setForm(prevForm => ({...prevForm, [name]: value, id: new Date().getTime().toString()}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    id='location' 
                    type="text"
                    value={form.location}
                    onChange={handleChange}/>
            </label>
            <label>
                <input 
                    id='timezoneOffset' 
                    type="text"
                    value={form.timezoneOffset}
                    onChange={handleChange}/>
            </label>
            <button type="submit"></button>
        </form>
    )
}