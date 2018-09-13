import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import categoryWrapper from '../../hoc/CategoryWrapper'
import { header, category, attention, value, footer } from './Category.less'
import Icon from '../Icon'

const Category = ({ amount, title, children }) => {
  const variable = title === 'rest' || title === 'necessary';
  const danger = amount <= 0;
  return (
    <section className={category}>
      <h3 className={header}>
        {title}
        {variable &&
        <NavLink to={`/${title}`}>
          <Icon icon='bill' />
        </NavLink>
        }
      </h3>
      <div className={value}>
        <span className={danger && variable ? attention : ''}>
          {amount.toFixed(2)}
        </span>
        <Icon icon='coins' />
      </div>
      <div className={footer}>
        {children}
      </div>
    </section>
  )
};

Category.propTypes = {
  amount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default categoryWrapper(Category);