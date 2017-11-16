import React, { Component } from 'react'
import './style.less'
import PropTypes from 'prop-types'
import signalRequestLoadTypes from './../../flux/state/types/signals/requestLoadTypes'
import actionChangeTypeFilter from './../../flux/state/types/actions/changeTypeFilter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Spinner from '../Spinner'

class TypeSelector extends Component {
  constructor () {
    super()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    this.props.loadTypes()
  }

  onChange (type, value) {
    this.props.changeTypeFilter(type, value)
  }

  render () {
    return (
      <section className='TypeSelector'>
        <Spinner visible={this.props.typesLoading}/>

        Types

        <ul className='TypeSelector_list'>
          {
            this.props.typeFilterList
              .map(
                ({type, state}) => {
                  const id = `checkbox_type_${type}`

                  return (
                    <li className='TypeSelector_item' key={type}>
                      <input
                        className='TypeSelector_input'
                        id={id}
                        checked={state}
                        onChange={e => this.onChange(type, e.target.checked)}
                        type='checkbox'
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
  typeFilterList  : PropTypes.array,
  typesLoading    : PropTypes.bool,
  loadTypes       : PropTypes.func,
  changeTypeFilter: PropTypes.func,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      loadTypes       : signalRequestLoadTypes,
      changeTypeFilter: actionChangeTypeFilter,
    },
    dispatch,
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    typesLoading  : state.types.loading,
    typeFilterList: state.types.filterList,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeSelector)
