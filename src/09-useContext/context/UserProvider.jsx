import React, { useState } from 'react'
import { UserContext } from './UserContext'

const user = {
    id:197813261,
    name:'Mario',
    email:'mlabbe.dev@gmail.com'
}

const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState()

    return (
        // <UserContext.Provider value={{ user }}>
        <UserContext.Provider value={{ user, setUser }}>
        
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider
