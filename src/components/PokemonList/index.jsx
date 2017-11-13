import React, { Component } from 'react'
import './style.less'
import signalRequestLoadPokemonList from './../../flux/state/signals/requestLoadPokemonList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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
    pokemonList       : state.state.pokemonList,
    pokemonListLoading: state.state.pokemonListLoading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
