import React from 'react'
import ControlPanel from '../ControlPanel'
import PokemonList from '../PokemonList'
import './style.less'

export default function Pokedex () {
  return (
    <section className='Pokedex'>
      <ControlPanel />
      <PokemonList />
    </section>
  )
}
