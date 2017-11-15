import React from 'react'
import './style.less'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import actionSearchPokemon from './../../flux/state/actions/searchPokemon'

function Search ({searchStr, searchPokemon}) {
  return (
    <section className='Search'>
      <input
        className='Search_input'
        autoFocus
        type='search'
        value={searchStr}
        placeholder='Search…'
        onChange={e => searchPokemon(e.target.value)} />
    </section>
  )
}

Search.propTypes = {
  searchStr    : PropTypes.string,
  searchPokemon: PropTypes.func,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      searchPokemon: actionSearchPokemon,
    },
    dispatch,
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    searchStr: state.searchStr,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
