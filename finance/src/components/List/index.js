import React from 'react'
import PropTypes from 'prop-types'

import { list } from './List.less'

const List = ({ items, title }) => {
  const history = (
    <ul className={list}>
      {items.map(item =>
        <li>
          <b>&#10004;</b>
          <i>{item}</i>
        </li>
      )}
    </ul>);

  return (
    <div>
      <h2><i>{title.toUpperCase()}</i></h2>
      {items.length ? history : <p>No data</p>}
    </div>
  )
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default List;