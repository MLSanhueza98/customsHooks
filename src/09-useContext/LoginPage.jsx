import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const LoginPage = () => {
    const { user, setUser } = useContext( UserContext )
    // console.log(user)
  return (
    <>
        <h1>LoginPage</h1>
        <hr /> 

        <pre aria-label='pre'>
            { JSON.stringify( user, null, 3 ) }
        </pre>

        <button
          className='btn btn-primary'
          onClick={ () => setUser({ id: 123, name: 'mario', email: 'correo@gmail.com' }) }
        >
          User
        </button>
    </>
  )
}

export default LoginPage
