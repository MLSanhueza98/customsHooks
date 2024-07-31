import React, { useEffect, } from 'react'
import useForm from '../hooks/useForm'

const FormWithCustomHook = () => {

    const { formState, onResetForm, onInputChange, username, password, email } = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const { username, email, password } = formState

    useEffect(() => {
        // console.log('useEffect called')
    }, [])
    
    useEffect(() => {
        // console.log('formState changed')
    }, [formState])
    
    useEffect(() => {
        // console.log('email changed')
    }, [email])

    return (
        <>
            <h1>Form with custom Hook</h1>
            <hr />

            <input 
                type="text" 
                className='form-control'
                placeholder="Username"
                name="username" 
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className='mt-2 form-control'
                placeholder="email"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password" 
                className='mt-2 form-control'
                placeholder="password"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className='btn btn-primary mt-2'>
                Reset
            </button>
            
        </>
    )
}

export default FormWithCustomHook
