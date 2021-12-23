import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, deleteTodo, toggleTodo, editTodo}) => {
    return (
        <div className="list">
           <h2 style ={{display: 'grid', placeItems: 'center'}}>רשימת מטלות</h2>  
           {todos.map(todos =>(
            <TodoItem
                key={todos.id}
                todo= {todos}
                complete={todos.complete}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
            />
           ))}
           
        </div>
    )
}

export default TodoList;
