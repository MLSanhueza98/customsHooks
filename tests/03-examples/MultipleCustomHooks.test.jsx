import { fireEvent, render, screen } from "@testing-library/react"
import Layout from "../../src/05-useLayoutEffect/Layout"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"


jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('test on <Layout />', () => {

    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })
    

    // beforeEach( () => {
    //     jest.clearAllMocks() 
    // })

    test('must show default component', () => {

        useFetch.mockReturnValue({
            data: null, 
            isLoading: true,
            hasError: null
        })

        render( <Layout /> )
        
        // screen.debug()

        expect( screen.getByText('Loading...') )
        expect( screen.getByText('Breaking Quotes') )

        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        expect( nextButton.disabled ).toBeTruthy()

    })

    test('must show a Quote', () => { 
        useFetch.mockReturnValue({
            data: [{ author: 'yo', quote: 'MunhoHola' }], 
            isLoading: false,
            hasError: null
        })
        render( <Layout /> )
        
        expect( screen.getByText( 'MunhoHola' ) ).toBeTruthy()
        expect( screen.getByText( 'yo' ) ).toBeTruthy()

        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        expect( nextButton.disabled ).toBeFalsy()
    })

    test('must call increment´s function', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'yo', quote: 'MunhoHola' }],
            isLoading: false,
            hasError: null
        })

        render( <Layout /> )
        
        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        fireEvent.click( nextButton )

        expect( mockIncrement ).toHaveBeenCalled()

    })

})
