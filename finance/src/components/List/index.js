import React from 'react'
import PropTypes from 'prop-types'

const List = ({ items }) => {
  return items.length ?
    <ul>
      {items.map(item => <li>{item}</li>)}
    </ul>
    :
    <p>No data</p>
};

List.propTypes = {
  items: PropTypes.array.isRequired
}

export default List;