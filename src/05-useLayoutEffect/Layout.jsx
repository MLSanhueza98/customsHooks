import React from 'react'
import { useCounter, useFetch } from '../hooks/'
import Quote from './Quote'
import LoadingQuote from './LoadingQuote'


const Layout = () => {

    const { counter, increment } = useCounter( 1 )  

    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`)
    const { author, quote } = !!data && data[0]


    return (
        <>
            <h1> Breaking Quotes </h1>
            <hr />

            { isLoading 
                ? <LoadingQuote />
                : (
                    <Quote 
                        author={ author }
                        quote={ quote }
                    />
                )
            }
            
            <button 
                className='btn btn-primary mt-2' 
                disabled={ isLoading }
                onClick={ () => increment() }
                > 
                Next quote
            </button>

        </>
    )
}

export default Layout

