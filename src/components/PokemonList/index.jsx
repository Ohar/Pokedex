import React, { Component } from 'react'
import './style.less'
import signalRequestLoadPokemonList from './../../flux/state/pokemonList/signals/requestLoadPokemonList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Pokemon from './../Pokemon'
import filterPokemonListByTypes from './../../utils/filterPokemonListByTypes'
import filterPokemonListByNames from './../../utils/filterPokemonListByNames'
import countPageSliceIndexes from './../../utils/countPageSliceIndexes'
import MIN_PAGE from '../../consts/MIN_PAGE'
import Paginator from './../Paginator'
import PAGE_SIZE from '../../consts/PAGE_SIZE'
import Spinner from '../Spinner'

class PokemonList extends Component {
  componentDidMount () {
    this.props.loadPokemonList()
  }

  render () {
    const pokemonListFiltered = this.props.pokemonList
      .filter(filterPokemonListByTypes(this.props.typesFilter))
      .filter(filterPokemonListByNames(this.props.searchStr))

    const MAX_ITEMS     = pokemonListFiltered.length
    const MAX_PAGE      = (MAX_ITEMS + PAGE_SIZE - MAX_ITEMS % PAGE_SIZE) / PAGE_SIZE
    const currPage      = Math.min(MAX_PAGE, Number(this.props.page) || MIN_PAGE)
    const {first, last} = countPageSliceIndexes(currPage, MAX_ITEMS)

    return (
      <section className='PokemonList'>
        <Paginator currPage={currPage} maxPage={MAX_PAGE}/>

        <Spinner visible={this.props.loading}/>

        <ul className='PokemonList_list'>
          {
            pokemonListFiltered
              .slice(first, last)
              .map(pokemon => (
                <li
                  className='PokemonList_item'
                  key={pokemon.id}>
                  <Pokemon pokemon={pokemon}/>
                </li>
              ))
          }
        </ul>

        <Paginator currPage={currPage} maxPage={MAX_PAGE}/>
      </section>
    )
  }
}

PokemonList.propTypes = {
  pokemonList    : PropTypes.array,
  typesFilter    : PropTypes.string,
  loadPokemonList: PropTypes.func,
  searchStr      : PropTypes.string,
  page           : PropTypes.string,
  loading        : PropTypes.bool,
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
    loading    : state.pokemonList.loading,
    typesFilter: state.types.filter,
    searchStr  : state.search.str,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
