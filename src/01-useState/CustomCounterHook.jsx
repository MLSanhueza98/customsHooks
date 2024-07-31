import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CustomCounterHook = () => {

  const { counter, decrement, reset, increment } = useCounter(  )

  return (
    <>

        <h1>Counter with Hook: { counter } </h1>

        <button className='btn btn-primary' onClick={() => decrement(2)}> -1 </button>
        <button className='btn btn-primary' onClick={reset}> reset </button>
        <button className='btn btn-primary' onClick={() => increment(4)}> +1 </button>

      
    </>
  )
}

export default CustomCounterHook
