import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.less'

const Button = ({ children, click }) => {
  return (
    <button className={classes.btn} onClick={click}>
      {children}
    </button>
  )
};

Button.propTypes = {
  click: PropTypes.func.isRequired
}

export default Button;