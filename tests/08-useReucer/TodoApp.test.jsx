import { render, screen } from "@testing-library/react"
import TodoApp from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/08-useReducer/useTodo"

jest.mock( '../../src/08-useReducer/useTodo' )

describe('test on <TodoApp /> ', () => {
    
    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: '#1', done: false}
        ],
        todosCount: 1, 
        pendingTodos: 1, 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn() 
    })

    test('must show the default component', () => {
        render( <TodoApp /> )
        // screen.debug()

        expect( screen.getByText( '#1' ) ).toBeTruthy()
        expect( screen.getByRole( 'textbox' ) ).toBeTruthy()


    } )
})
