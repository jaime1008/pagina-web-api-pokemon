import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokemonCars from './components/PokemonCars'

function App() {
  const [pokemonData, setPokemonData] = useState(null)
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

  const fetchPokemons = async (id) => {
    try{

      const response = await fetch(`${BASE_URL}${id}`)
      const data = await response.json()
      
      setPokemonData((prevpokemonData) => [...
        prevpokemonData, data])

      console.log(pokemonData)
    } catch (error) {
      console.error('ERROR CON EL FETCH DE POKEMON')
    }
  }

  const fetchAllPokemons =  () => 
    {
      for (let i = 1; i <= 20; i++) 
      {
        fetchPokemons(i)
      }
    }

  useEffect(() => {
    fetchPokemons(1)

  },[])
  return (
    <>
    <h1 className='text-4xl font-semibold text-center my-6'> POKE API DEMO</h1>
    <div className='px-4'>
      <div className='grid grid-cols-1 sn:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <PokemonCars pokemonData={pokemonData}/>
      </div>
    </div>

    </>
  )
}

export default App
