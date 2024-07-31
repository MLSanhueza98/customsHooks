import React from 'react'
import { useCounter, useFetch } from '../hooks/index'
import LoadingMessage from './LoadingMessage'
import PokemonCard from './PokemonCard'

const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter( 1 )  

    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`)

    return (
        <>
            <h1> Data Pokemon </h1>
            <hr />

            { isLoading 
                ? <LoadingMessage />
                : (
                    <PokemonCard 
                        id={data?.id} 
                        name={data?.name}
                        sprites={ [
                            data.sprites.front_default,
                            data.sprites.front_shiny,
                            data.sprites.back_default,
                            data.sprites.back_shiny
                        ] }
                    />
                )
            }

            {/* <pre>{ JSON.stringify( data, null, 2 ) }</pre> */}

            <button 
                className='btn btn-primary mt-2' 
                onClick={ counter > 1 ? () => decrement() : null }
                > 
                Prev 
            </button>
            <button className='btn btn-primary mt-2' onClick={ () => increment() }> Next </button>


        </>
    )
}

export default MultipleCustomHooks

