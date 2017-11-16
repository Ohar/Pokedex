import React, { Component } from 'react'
import './style.less'
import signalRequestLoadPokemonList from './../../flux/state/pokemonList/signals/requestLoadPokemonList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Pokemon from './../Pokemon'
import filterPokemonListByTypes from './../../utils/filterPokemonListByTypes'
import filterPokemonListByNames from './../../utils/filterPokemonListByNames'

class PokemonList extends Component {
  componentDidMount () {
    this.props.loadPokemonList()
  }

  render () {
    return (
      <ul className='PokemonList'>
        {
          this.props.pokemonList
            .filter(filterPokemonListByTypes(this.props.typesFilter))
            .filter(filterPokemonListByNames(this.props.searchStr))
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
  typesFilter    : PropTypes.string,
  loadPokemonList: PropTypes.func,
  searchStr      : PropTypes.string,
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
    pokemonList: state.pokemonList.list,
    typesFilter: state.types.filter,
    searchStr  : state.search.str,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
