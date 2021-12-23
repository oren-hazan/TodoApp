import React from 'react'
import useInputHook from './hooks/useInputHook'

const TodoForm = ({addTodo}) => {
    const [value, handleChange, resetValue] = useInputHook('')
    const handleSubmit = (event) => {
        event.preventDefault();
        resetValue();
        addTodo(value);
    }

    return (
        <div className="info">
          <form onSubmit={handleSubmit}>
           <input value={value} onChange={handleChange} type="text" autoFocus/>
          </form>
            
        </div>
    )
}

export default TodoForm;
