import React from 'react'
import './style.less'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import MIN_PAGE from '../../consts/MIN_PAGE'

function Paginator ({currPage, maxPage}) {
  const prevLink = currPage > MIN_PAGE
    ? <Link className='Paginator_link' to={`/${currPage - 1}`} title='Previous page'>←</Link>
    : null

  const nextLink = currPage < maxPage
    ? <Link className='Paginator_link' to={`/${currPage + 1}`} title='Next page'>→</Link>
    : null

  return (
    <section className='Paginator'>
      {prevLink}
      {currPage}
      {nextLink}
    </section>
  )
}

Paginator.propTypes = {
  currPage: PropTypes.number,
  maxPage : PropTypes.number,
}

export default Paginator
