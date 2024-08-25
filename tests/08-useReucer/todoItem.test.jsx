import { fireEvent, render, screen } from "@testing-library/react"
import TodoItem from '../../src/08-useReducer/TodoItem'

describe(' test on <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Saichoooo',
        done: false
    }
    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() )

    test(' must show incompelete´s todo', () => {
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock } 
            /> 
        )

        const liElement = screen.getByRole( 'listitem' )
        expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between ' )
        
    })

    test(' must show a completed todo', () => {
        
        todo.done = true

        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock } 
            /> 
        )

        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain( 'text-decoration-line-through' )
        
    })

    test('span must be called when toggleTodo is clicked ', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock } 
            /> 
        )
        const spanElement = screen.getByLabelText('span')
        fireEvent.click( spanElement )
    
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )

    })

    test('sspan must be called when onDeleteTodo is clicked', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock } 
            /> 
        )

        const buttonDelete = screen.getByRole( 'button' )
        fireEvent.click( buttonDelete )

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )

    })
    

})