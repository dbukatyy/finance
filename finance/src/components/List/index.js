import React from 'react'
import PropTypes from 'prop-types'

import { list } from './List.less'

const List = ({ items, title, delCosts }) => {
  const history = (
    <ul className={list}>
      {items.map(item =>
        <li key={item.id} onClick={() => delCosts(title, item.id, item.amount)}>
          <b>&#10004;</b>
          <i>{item.amount}</i>
          {item.description && <i> - {item.description}</i>}
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
  title: PropTypes.string.isRequired,
  delCosts: PropTypes.func.isRequired
}

export default List;