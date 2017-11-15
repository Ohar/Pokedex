import React, { Component } from 'react'
import './style.less'
import signalRequestLoadPokemonList from './../../flux/state/signals/requestLoadPokemonList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Pokemon from './../Pokemon'

class PokemonList extends Component {
  componentDidMount () {
    this.props.loadPokemonList()
  }

  render () {
    return (
      <ul className='PokemonList'>
        {
          this.props.pokemonList
            .map(pokemon => (
              <li
                className='PokemonList_item'
                key={pokemon.id}>
                <Pokemon pokemon={pokemon}/>
              </li>
            ))
        }
      </ul>
    )
  }
}

PokemonList.propTypes = {
  pokemonList    : PropTypes.array,
  loadPokemonList: PropTypes.func,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      loadPokemonList: signalRequestLoadPokemonList,
    },
    dispatch,
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    pokemonList: state.pokemonList,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
