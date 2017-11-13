import React from 'react'
import './style.less'
import Spinkit from 'react-spinkit'

function Spinner ({visible = true}) {
  return visible
    ? (
      <div className='Spinner'>
        <Spinkit name='ball-clip-rotate-multiple' />
      </div>
    )
    : null
}

export default Spinner
