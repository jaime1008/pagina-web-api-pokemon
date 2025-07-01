import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [pokemonData, setPokemonData] = useState(null)
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

  const fetchPokemons = async (id) => {
    try{

      const response = await fetch(`${BASE_URL}${id}`)
      const data = response.json()
      console.log(data)
      setPokemonData(data)
    } catch (error) {
      console.error('ERROR CON EL FETCH DE POKEMON')
    }
  }

  useEffect(() => {
    fetchPokemons(1)

  },[])
  return (
    <>
    
    </>
  )
}

export default App
