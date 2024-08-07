import React, { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'algodon',
        email: 'mail@correo.com'
    })

    const { username, email }= formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

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
            <h1>Simple Form</h1>
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

            
            { (username === 'algodon2') && <Message/> }

        </>
    )
}

export default SimpleForm
