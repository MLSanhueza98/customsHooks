import { renderHook } from "@testing-library/react"
import useForm from '../../src/hooks/useForm'
import { act } from "react"

describe('Test on useForm Hook', () => {
    
    const initialForm = {
        name: 'mario',
        email: 'mario@gmail.com'
    }
    
    test('Must return default information', () => {
        const { result } = renderHook( () => useForm( initialForm ) )
        
        // console.log(result.current)
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        })
    })

    test('Must rename the form´s name', () => {
        
        const newValue = 'new Value'
        
        const { result } = renderHook( () => useForm( initialForm ) )
        const { onInputChange } = result.current
        
        
        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } })
        })
      
        expect( result.current.name ).toBe( newValue )

    })
    
    test('Must perform the form´s resert', () => {
        
        const newValue = 'new Value'
        
        const { result } = renderHook( () => useForm( initialForm ) )
        const { onInputChange, onResetForm } = result.current
        
        
        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } })
            onResetForm()
        })
      
        expect( result.current.name ).toBe( initialForm.name )

    })
    
})
