import React,{useState} from 'react'
import './TodoForm.css'

function TodoForm({savetodo}) {
const [value,setValue] = useState('')
    return (
        <form className='has-background-light'>
            <div className="field center">
                <div className="control">
                    <input type="text"
                    placeholder='Add To-Do'
                    className='input'
                    autoComplete='off'
                    name={value.title}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                    value={value}
                    />
                </div>
            </div>
            <div className="field center">
                   <div className="control">
                       <textarea 
                       className='textarea' 
                       placeholder='Description'
                       name={value.description}
                       onChange={(e) => {
                           savetodo(value)
                           setValue('')
                       }}
                       />
                <div className="control">
                <button type="submit" 
                className='button is-link'
                onClick={(event) => {
                    event.preventDefault()
                    console.log(value)
                    savetodo(value)
                    setValue("")
                }}
                >
                    Submit
                </button>
            </div>
            </div>
            </div>
            </form>
    )
}

export default TodoForm


