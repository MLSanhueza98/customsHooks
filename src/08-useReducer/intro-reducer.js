

const initialState = [{
    id: 1,
    todo: 'shave',
    done: false
}]

const todoList = ( state = initialState, action = {} ) => {
    
    if ( action.type === '[TODO] add todo') {
        return [ ...state, action.payload ]
    }


    return state
}


let todos = todoList()

const newTodo = {
    id: 2,
    todo: 'shower',
    donde: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoList( initialState, addTodoAction )

console.log(todos)