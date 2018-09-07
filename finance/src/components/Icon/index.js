import React from 'react'
import classes from './Icon.less'
import icons from '../../icons.svg'
import PropTypes from 'prop-types'

const Icon = ({ icon }) => (
  <svg viewBox='0 0 16 16' className={classes.icon}>
    <use xlinkHref={`${icons}#${icon}`}/>
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired
}

export default Icon;