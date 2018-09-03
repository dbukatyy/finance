import React from 'react'
import PropTypes from 'prop-types'

const List = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  )
};

List.propTypes = {
  items: PropTypes.array.isRequired
}

export default List;