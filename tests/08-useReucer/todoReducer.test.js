import { todoReducer } from '../../src/08-useReducer/todoReducer'

describe('test on todoReducer', () => {
    
    const initialState = [{
        id: 1,
        description: 'demo',
        done: false
    }]


    test('must return initial statae', () => {
        
        const newState = todoReducer( initialState, {} )
        expect( newState ).toBe( initialState )
    
    })

    test('must be add an ToDo', () => { 
        const action = {
            type: '[TODO] add Todo',
            payload: {
                id: 2,
                description: 'new ToDo',
                done: false
            }
        }

        const newState = todoReducer( initialState, action )
        expect( newState.length ).toBe( 2 )
        expect( newState ).toContain( action.payload ) 
    })

    test('must be remove an ToDo', () => { 
        const action = {
            type: '[TODO] remove Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action )
        expect( newState.length ).toBe( 0 )
        // expect( newState ).toContain( action.payload ) 
    })

    test('must perform the ToDo´s toggle ', () => { 
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action )
        expect( newState[0].done ).toBe( true )
        // expect( newState ).toContain( action.payload ) 
    })



})
