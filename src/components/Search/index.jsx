import React from 'react'
import './style.less'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import actionSetSearchStr from './../../flux/state/search/actions/setSearchStr'

function Search ({searchStr, searchPokemon}) {
  return (
    <section className='Search'>
      <input
        className='Search_input'
        autoFocus
        type='search'
        value={searchStr}
        placeholder='Type pokemon name…'
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
      searchPokemon: actionSetSearchStr,
    },
    dispatch,
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    searchStr: state.search.str,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
