import React from 'react'
import icons from '../../icons.svg'

const Icon = (props) => (
  <svg viewBox='0 0 16 16' className={`icon icon-${props.icon}`}>
    <use xlinkHref={`${icons}#${props.icon}`}/>
  </svg>
);

export default Icon;