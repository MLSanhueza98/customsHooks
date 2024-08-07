import { useReducer } from 'react'
import { todoReducer } from './todoReducer'



const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || []
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init )

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] add Todo',
            payload: todo
        }
        dispatch( action )
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
    
        todosCount: todos.length,
        pendingTodos: todos.filter( todo => !todo.done ).length,
    
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}