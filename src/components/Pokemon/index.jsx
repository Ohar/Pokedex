import React from 'react'
import './style.less'
import PropTypes from 'prop-types'
import capitalizeFirstLetter from 'capitalize-first-letter'
import classNames from 'classnames'

const MAX_POKEMON_HEADER_SIZE = 15

function Pokemon ({pokemon}) {
  const name = capitalizeFirstLetter(pokemon.name)

  return (
    <section className='Pokemon'>
      <header
        className='Pokemon_header'>
        <div
          data-name={name}
          className={
            classNames(
              'Pokemon_name',
              name.length > MAX_POKEMON_HEADER_SIZE
                ? 'Pokemon_name-long'
                : '',
            )
          }>
          {
            name
              .split('')
              .map(
                (letter, i) => (
                  <span className='Pokemon_letter' data-letter={letter} key={i}>{letter}</span>
                ),
              )
          }
        </div>
      </header>

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
          <th className='Pokemon_cell Pokemon_cell-head'>Weight</th>
          <td className='Pokemon_cell'>{pokemon.weight}</td>
        </tr>
        <tr>
          <th className='Pokemon_cell Pokemon_cell-head'>Type</th>
          <td className='Pokemon_cell'>{pokemon.types.join(', ')}</td>
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
