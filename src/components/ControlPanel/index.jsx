import React from 'react'
import Search from '../Search'
import TypeSelector from '../TypeSelector'
import './style.less'

export default function ControlPanel () {
  return (
    <section className='ControlPanel'>
      <Search />
      <TypeSelector/>
    </section>
  )
}
