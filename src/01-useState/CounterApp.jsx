import React, { useState } from 'react'

const CounterApp = () => {

    const [ state, setCounter ] = useState({
        c1: 10,
        c2: 20,
        c3: 30
    })

    const { c1, c2, c3 } = state

    return (
        <>
            <h1>Counter: {c1} </h1>
            <h1>Counter 2: {c2} </h1>
            <h1>Counter 3: {c3} </h1>


            <hr />      
            <button
                // onSubmit={handleSubmit}
                className="btn"
                onClick={ () => setCounter({
                    ...state,
                    c1: c1 + 1, 
                }) }
            >
                +1
            </button>
        </>
    )
}

export default CounterApp
