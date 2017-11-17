import React from 'react'
import ControlPanel from '../ControlPanel'
import PokemonList from '../PokemonList'
import './style.less'
import Spinner from '../Spinner'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Pokedex ({pokemonListLoading, match}) {
  return (
    <section className='Pokedex'>
      <ControlPanel/>
      <PokemonList page={match.params.page}/>
    </section>
  )
}

Pokedex.propTypes = {
  pokemonListLoading: PropTypes.bool,
  match             : PropTypes.object,
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    pokemonListLoading: state.pokemonList.loading,
  }
}

export default connect(mapStateToProps)(Pokedex)
