import React from 'react'
import classes from './Icon.less'
import icons from '../../icons.svg'

const Icon = (props) => (
  <svg viewBox='0 0 16 16' className={classes.icon}>
    <use xlinkHref={`${icons}#${props.icon}`}/>
  </svg>
);

export default Icon;