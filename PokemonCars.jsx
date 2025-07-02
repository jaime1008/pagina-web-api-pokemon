import React from 'react'

export default function PokemonCars({pokemonData}) {
    if (!pokemonData) {
        return <h1>cargando pokemon...</h1>
    }
  return (
    
    <div className='bg-white rounded-lg p-4'>
        <img src={pokemonData.sprites.front_default}
        alt="pokemonimage"
        className='w-full h-42 object-cover' />
        <div>
            <h2 className='text-x1 font-semibold capitalize'>
                {pokemonData.name}
            </h2>
            <p>ID: {pokemonData.id} </p>
        </div>
    </div>
  )
}
