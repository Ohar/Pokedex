import React, { Component } from 'react'
import './style.less'
import PropTypes from 'prop-types'
import signalRequestLoadTypes from './../../flux/state/types/signals/requestLoadTypes'
import actionSetTypeFilter from './../../flux/state/types/actions/setTypeFilter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import capitalizeFirstLetter from 'capitalize-first-letter'
import Spinner from '../Spinner'

class TypeSelector extends Component {
  componentDidMount () {
    this.props.loadTypes()
  }

  render () {
    return (
      <section className='TypeSelector'>
        <Spinner visible={this.props.typesLoading}/>

        <select className='TypeSelector_select' onChange={e => this.props.setTypeFilter(e.target.value)}>
          <option className='TypeSelector_option' value='all'>
            All pokemon types
          </option>
          {
            this.props.typesList
              .map(type => (
                <option className='TypeSelector_option' value={type} key={type}>
                  {capitalizeFirstLetter(type)}
                </option>
              ))
          }
        </select>
      </section>
    )
  }
}

TypeSelector.propTypes = {
  typesFilter  : PropTypes.string,
  typesList    : PropTypes.array,
  typesLoading : PropTypes.bool,
  loadTypes    : PropTypes.func,
  setTypeFilter: PropTypes.func,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      loadTypes    : signalRequestLoadTypes,
      setTypeFilter: actionSetTypeFilter,
    },
    dispatch,
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    typesFilter : state.types.filter,
    typesList   : state.types.list,
    typesLoading: state.types.loading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeSelector)
