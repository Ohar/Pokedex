import React from 'react'
import ControlPanel from '../ControlPanel'
import PokemonList from '../PokemonList'
import './style.less'
import Spinner from '../Spinner'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Pokedex ({pokemonListLoading}) {
  return (
    <section className='Pokedex'>
      <ControlPanel />
      <Spinner visible={pokemonListLoading}/>
      <PokemonList />
    </section>
  )
}

Pokedex.propTypes = {
  pokemonListLoading: PropTypes.bool,
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    pokemonListLoading: state.pokemonListLoading,
  }
}

export default connect(mapStateToProps)(Pokedex)
