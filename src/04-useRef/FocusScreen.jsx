import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef()

    const onClick = () => {
        // document.querySelector('input').select()
        inputRef.current.select()
    }
  return (
    <>
        <h1> Focus Screen </h1>
        <hr />

        <input
            ref={ inputRef }
            type="text" 
            placeholder='type your name'
            className='form-control'
        />

        <button 
            className='btn btn-primary mt-2'
            onClick={ onClick }
        > 
            Set Focus
        </button>
        
    </>
  )
}

export default FocusScreen
