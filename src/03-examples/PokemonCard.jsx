import React from 'react'

const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section 
        style={{ height: 200 }}
    >
        <h2 className='tex-capitalize'> #{ id } - { name } </h2>

        <div >
            {
                sprites.map( sprite => (
                    <img 
                        key={ sprite } 
                        src={ sprite } 
                        alt={ name } 
                        className='img-thumbnail'
                    />
                ))
            }
        </div>


    </section>
  )
}

export default PokemonCard
