import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const HomePage = () => {
  const { user, setUser } = useContext( UserContext )

  return (
    <>
        <h1>Home</h1>
        <hr /> 

        <small>  welcome {user?.name} </small>

        <pre>
        {JSON.stringify( user, null, 3)}
        </pre>

        <button
          className='btn btn-primary'
          onClick={ () => setUser({id:123, name:'mario'})}
          >
          set user
        </button>
    </>
  )
}

export default HomePage
