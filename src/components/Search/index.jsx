import React, { Component } from 'react'
import './style.less'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import actionSetSearchStr from './../../flux/state/search/actions/setSearchStr'

class Search extends Component {
  constructor () {
    super()

    this.onChange = this.onChange.bind(this)
    this.doSearch = debounce(this.doSearch.bind(this), 200)

    this.state = {
      search: '',
    }
  }

  onChange (e) {
    this.setState({search: e.target.value})
    this.doSearch()
  }

  doSearch () {
    this.props.setSearchStr(this.state.search)
  }

  render () {
    return (
      <section className='Search'>
        <input
          className='Search_input'
          autoFocus
          type='search'
          value={this.state.search}
          placeholder='Type pokemon name…'
          onChange={this.onChange}
        />
      </section>
    )
  }
}

Search.propTypes = {
  searchStr   : PropTypes.string,
  setSearchStr: PropTypes.func,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      setSearchStr: actionSetSearchStr,
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
