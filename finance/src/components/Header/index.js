import React from 'react'
import PropTypes from 'prop-types'

import { header, logo, buttons, spend } from './Header.less'
import Icon from '../Icon'
import Button from '../Button'
import { NavLink } from 'react-router-dom'

const Header = ({ onReset, balance, totalSpend = 0 }) => {
  return (
    <header className={header}>
      <div className={logo}>
        <NavLink to="/">
          <Icon icon="wallet"/>
        </NavLink>
        <b>{balance.toFixed(2)}</b>
        <span className={spend}> - {totalSpend}</span>
      </div>
      <div className={buttons}>
        <Button click={onReset}>
          <Icon icon="gear"/>
        </Button>
        <Button click={onReset}>
          <span>Reset</span>
        </Button>
      </div>
    </header>
  )
};

Header.propTypes = {
  onReset: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
  totalSpend: PropTypes.number.isRequired,
}

export default Header;