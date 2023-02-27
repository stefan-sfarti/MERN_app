import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createTodo} from '../features/todos/todoSlice'

function TodoForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createTodo({ text }))
        setText('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">To Do</label>
                    <input type="text"
                           name='text'
                           id='text'
                           value={text}
                           onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type='submit'>Add To Do</button>
                </div>
            </form>
        </section>
    )
}

export default TodoForm