import React, { Component } from 'react'
import './style.less'
import PropTypes from 'prop-types'
import signalRequestLoadTypes from './../../flux/state/signals/requestLoadTypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Spinner from '../Spinner'

class TypeSelector extends Component {
  componentDidMount () {
    this.props.loadTypes()
  }

  render () {
    return (
      <section className='TypeSelector'>
        <Spinner visible={this.props.typesLoading}/>

        Types

        <ul className='TypeSelector_list'>
          {
            this.props.types
              .map(
                type => {
                  const id = `checkbox_type_${type}`

                  return (
                    <li className='TypeSelector_item' key={type}>
                      <input
                        className='TypeSelector_input'
                        type='checkbox'
                        id={id}
                      />
                      <label className='TypeSelector_label' htmlFor={id}>
                        {type}
                      </label>
                    </li>
                  )
                })
          }
        </ul>

      </section>
    )
  }
}

TypeSelector.propTypes = {
  types       : PropTypes.array,
  typesLoading: PropTypes.func,
  loadTypes   : PropTypes.func,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      loadTypes: signalRequestLoadTypes,
    },
    dispatch,
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    typesLoading: state.typesLoading,
    types       : state.types,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeSelector)
