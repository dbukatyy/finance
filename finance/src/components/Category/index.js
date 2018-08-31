import React from 'react'
import PropTypes from 'prop-types'
import categoryWrapper from '../../hoc/CategoryWrapper'

const Category = ({ amount, title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{amount}</p>
      {children}
    </div>
  )
};

Category.propTypes = {
  amount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default categoryWrapper(Category);