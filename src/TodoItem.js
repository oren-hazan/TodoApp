import React, {useState} from 'react'
import './item.css'
import useInputHook from './hooks/useInputHook'

const TodoItem = ({todo, deleteTodo, toggleTodo, complete, editTodo}) => {

        const [isEditing, setIsEditing]= useState(false);
        const [value, handleChange] = useInputHook(todo.text)

        const handleSubmit = (event) => {
            event.preventDefault();
            setIsEditing(false);
            editTodo(todo.id, value)
        }
    return (
        <div className="listItem">
            <button onClick={()=> setIsEditing(!isEditing)} className="edit">ערוך</button>
            <button onClick={()=> deleteTodo(todo.id)} className="delete">מחק</button>    
          <div className="box-input">
          <input onChange={()=> toggleTodo(todo.id)} type= "checkbox" defaultChecked={complete}/>
             {isEditing ? (
                 <form onSubmit={handleSubmit} className="edit-form">
                     <input value={value} onChange={handleChange} type="text" autoFocus/>
                     <div>
                         <button type="submit" className="save">שמור</button>
                     </div>
                 </form>
             ):(
                <div style={{textDecoration: complete ? 'line-through' : 'none'}}>{todo.text}
              </div> 
             )}
          </div>
             
        </div>
         
    )
}

export default TodoItem;
