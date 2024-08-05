import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'


const heavyStuff = ( iterationNumber = 10 ) => {
    for (let i=0; i<iterationNumber; i++ ) {
        console.log('lesgo')
    }

    return `${iterationNumber} iterations done`
}


const MemoHook = () => {

    const [ show, setShow ] = useState( true )
    const { counter, increment } = useCounter( 10 )

    const memorizedMemo = useMemo( () => heavyStuff(counter), [counter])

    return (
        <>

            <h1>
                Counter: <small>{ counter } </small> 
            </h1>
        
            <hr />

            <h4>{ memorizedMemo }</h4>

            <button
                className='btn btn-primary'
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary'
                onClick={ () => setShow(!show) }
            >
                Show/Hide: { JSON.stringify(show) }
            </button>

        </>
    )
}

export default MemoHook