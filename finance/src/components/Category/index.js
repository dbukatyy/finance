import React from 'react'
import PropTypes from 'prop-types'
import categoryWrapper from '../../hoc/CategoryWrapper'
import classes from './Category.less'
import Icon from '../Icon'

const Category = ({ amount, title, children }) => {
  const variable = title === 'rest' || title === 'necessary';
  const danger = amount <= 0;
  return (
    <div>
      <h3>{title}</h3>
      <Icon icon='money' />
      <p className={danger && variable ? classes.attention : ''}>{amount} руб.</p>
      {children}
    </div>
  )
};

Category.propTypes = {
  amount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default categoryWrapper(Category);