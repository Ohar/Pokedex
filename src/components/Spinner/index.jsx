import React from 'react'
import './style.less'
import Spinkit from 'react-spinkit'
import PropTypes from 'prop-types'

function Spinner ({visible = true}) {
  return visible
    ? (
      <div className='Spinner'>
        <Spinkit name='ball-clip-rotate-multiple' />
      </div>
    )
    : null
}

Spinner.propTypes = {
  visible: PropTypes.bool,
}

export default Spinner
