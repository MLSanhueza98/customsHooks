import { renderHook } from "@testing-library/react"
import { useCounter } from '../../src/hooks/useCounter'
import { act } from "react"


describe('test on useCounter', () => {
    test('Must return default values', () => {    
        //renderHook permite renderizar un hook, en este caso renderizamos el resultado del hook
        const { result } = renderHook( () => useCounter() )
        const { counter, decrement, increment, reset } = result.current

        expect( counter ).toBe( 10 )
        expect( decrement ).toEqual( expect.any( Function ) )
        expect( reset ).toEqual( expect.any( Function ) )
        expect( increment ).toEqual( expect.any( Function ) )

    })

    test('Must generate the counter with value of 100 ', () => {
        
        const { result } = renderHook( () => useCounter( 100 ) )
        const { counter } = result.current

        expect( counter ).toBe( 100 )
    })

    test('Must increment the counter value', () => {

        const { result } = renderHook( () => useCounter(50) )
        const { counter, increment } = result.current

        act( () => {
            increment()
        })
        expect( result.current.counter ).toBe(51)

    })
    
    test('Must decrement the counter value', () => {

        const { result } = renderHook( () => useCounter(50) )
        const { counter, decrement } = result.current

        act( () => {
            decrement()
        })
        expect( result.current.counter ).toBe(49)

    })

    test('Must reset the counter value', () => {

        const { result } = renderHook( () => useCounter(50) )
        const { counter, decrement, reset } = result.current

        act( () => {
            decrement()
            reset()
        })
        expect( result.current.counter ).toBe(50)

    })

})
