import React from 'react'
import './style.less'
import PropTypes from 'prop-types'

function Pokemon ({pokemon}) {
  return (
    <section className='Pokemon'>
      <header className='Pokemon_name'>{pokemon.name}</header>
      <img
        className='Pokemon_avatar'
        width='96'
        height='96'
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <table className='Pokemon_params'>
        <tbody>
          <tr>
            <th>Weight</th>
            <td>{pokemon.weight}</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>{pokemon.types.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.object,
}

export default Pokemon
