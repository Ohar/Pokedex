import React, { Component } from 'react'
import './style.less'
import signalRequestLoadPokemonList from './../../flux/state/signals/requestLoadPokemonList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from './../Spinner'

class PokemonList extends Component {
  componentDidMount () {
    this.props.loadPokemonList()
  }

  render () {
    return (
      <section className='PokemonList'>
        <Spinner visible={this.props.pokemonListLoading} />

        <ul>
          {
            this.props.pokemonList.map(
              ({name, id, avatar}) => (
                <li key={id}>
                  {name}
                </li>
              )
            )
          }
        </ul>
      </section>
    )
  }
}

PokemonList.propTypes = {
  pokemonList       : PropTypes.array,
  pokemonListLoading: PropTypes.bool,
  loadPokemonList   : PropTypes.func,
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
    pokemonList       : state.pokemonList,
    pokemonListLoading: state.pokemonListLoading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
