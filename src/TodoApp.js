import React,{useState, useEffect} from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'


const TodoApp = () => {
    const InitialTodos= JSON.parse(window.localStorage.getItem('todos'))||[];

    const [todos, setTodos] = useState(InitialTodos);

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    },[todos]);

    const addTodo = (todo) => {
        todo.length > 0?
        setTodos([...todos, {id: uuidv4(), text: todo, complete: false}]) : setTodos([...todos])
    };

    const deleteTodo = (todoId) => {

        const filteredTodos = todos.filter((todo) => todoId !== todo.id)
        setTodos(filteredTodos);
    };

    const toggleTodo = (todoId) => {
        const updateTodos = todos.map((todo) => 
            todo.id === todoId ? {...todo, complete : !todo.complete} : todo
        );
        setTodos(updateTodos); 
    };

    const editTodo = (todoId, text) => {
        const updateTodos = todos.map((todo)=> 
        todo.id === todoId ? {...todo, text} : todo
        )
        
        // text.length > 0 ?
        setTodos(updateTodos) 
        // : setTodos([]);
    }
    
    return (
        <div style= {{display : 'grid', placeItems: "center"}}>
            <TodoForm addTodo={addTodo}/>
            <TodoList editTodo={editTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} todos={todos}/>
        </div>
    )
}

export default TodoApp;