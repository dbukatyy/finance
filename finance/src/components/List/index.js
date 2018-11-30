import React from 'react'
import PropTypes from 'prop-types'

import { list, list__item } from './List.less'
import Item from './Item'

const List = ({ items, title, delCosts, onEdit }) => {
  const history = (
    <ul className={list}>
      {items.map(item => (
        <Item
          key={item.id}
          className={list__item}
          item={item}
          title={title}
          delCosts={delCosts}
          onEdit={onEdit}
        />
      ))}
    </ul>
  )

  return (
    <div>
      <h2>
        <i>{title.toUpperCase()}</i>
      </h2>
      {items.length ? history : <p>No data</p>}
    </div>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  delCosts: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default List
