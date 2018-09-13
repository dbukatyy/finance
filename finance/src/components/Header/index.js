import React from 'react'
import PropTypes from 'prop-types'

import { header, logo, buttons } from './Header.less'
import Icon from '../Icon'
import Button from '../Button'
import { NavLink } from 'react-router-dom'

const Header = ({ onReset, balance }) => {
  return (
    <header className={header}>
      <div className={logo}>
        <NavLink to="/">
          <Icon icon="wallet"/>
        </NavLink>
        <b>{balance.toFixed(2)}</b>
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
}

export default Header;