import React, { useEffect, } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import { useTodo } from './useTodo'



const TodoApp = () => {

    const { 
        todos, 
        todosCount, 
        pendingTodos, 
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo 
    } = useTodo()


    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])


    return (
        <>
            <h1
                className='d-flex justify-content-between align-items-center'
                >
                    ToDo List
                    <small
                        className='blockquote border border-secondary rounded px-2 py-1 text-dark font-12'
                        > 
                        completed: { todosCount } - pending: { pendingTodos } 
                    </small>
            </h1>

            <hr />
            
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>New ToDo</h4>
                    <hr />

                    <TodoAdd 
                        onNewTodo={ handleNewTodo }
                    />
                    
                </div>
            </div>

        </>
    )
}

export default TodoApp
