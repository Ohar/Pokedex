import React from 'react'
import './style.less'
import PropTypes from 'prop-types'

function Pokemon ({pokemon}) {
  return (
    <section className='Pokemon'>
      <span className='Pokemon_name'>{pokemon.name}</span>
    </section>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.object,
}

export default Pokemon
