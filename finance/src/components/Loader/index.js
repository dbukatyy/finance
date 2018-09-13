import React, { Component } from 'react'
import { loader, wrapp, bag, coin, active } from './Loader.less'

import Icon from '../Icon'

class Loader extends Component {

  state = {
    active: true
  }

  componentDidMount() {
    this.interval = setInterval(() =>
      this.setState((state) => ({active: !state.active})),
    500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let classes = this.state.active ? `${coin}` : `${coin} ${active}`
    return (
      <div className={wrapp}>
        <div className={loader}>
          <span className={classes}>
            <Icon icon={"dollar"} />
          </span>
          <span className={bag}>
            <Icon icon={"euro"} />
          </span>
        </div>
      </div>
    )
  }
}
export default Loader;