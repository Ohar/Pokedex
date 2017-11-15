import React, { Component } from 'react'
import './style.less'
import signalRequestLoadPokemonList from './../../flux/state/signals/requestLoadPokemonList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Pokemon from './../Pokemon'
import filterPokemonListByTypes from './../../utils/filterPokemonListByTypes'

class PokemonList extends Component {
  componentDidMount () {
    this.props.loadPokemonList()
  }

  render () {
    return (
      <ul className='PokemonList'>
        {
          this.props.pokemonList
            .filter(filterPokemonListByTypes(this.props.typeFilterList))
            .slice(0, 20) // TODO: need pagination here
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
  typeFilterList : PropTypes.array,
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
    pokemonList   : state.pokemonList,
    typeFilterList: state.typeFilterList,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
