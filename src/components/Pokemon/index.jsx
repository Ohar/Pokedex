import React from 'react'
import './style.less'
import PropTypes from 'prop-types'

function Pokemon ({pokemon}) {
  return (
    <section className='Pokemon'>
      <header className='Pokemon_name'>{pokemon.name}</header>
    </section>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.object,
}

export default Pokemon
