import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../Icon'
import { btn, items, input } from './Item.less'

export default class Item extends Component {

  textInput = React.createRef();

  state = {
    edit: false,
    amount: 0
  }

  componentDidMount() {
    this.setState({
      amount: this.props.item.amount
    })
  }

  onChange = ({ target }) => {
    this.setState({
      amount: target.value
    });
  }
  
  toggleChange = () => {
    this.setState(
      ({edit}) => ({edit: !edit}),
      () => this.textInput.current && this.textInput.current.select()
    );
  }
  
  save = (title, id) => {
    this.props.onEdit(title, id, this.state.amount);
    this.toggleChange();
  }

  render() {
    const { item, title, delCosts } = this.props;
    const { edit, amount } = this.state;
    return (
      <li className={items}>
        <div>
          <b>&#10004;</b>
          {edit ?
            <input ref={this.textInput} className={input} type="text" name="amount" value={amount} onChange={this.onChange}/> :
            <i>{item.amount}</i>
          }
          {item.description && <i> - {item.description}</i>}
        </div>
        <div>
          {edit ?
            <button className={btn} onClick={() => this.save(title, item.id)}>
              <Icon icon="save" />
            </button> :
            <button className={btn} onClick={this.toggleChange}>
              <Icon icon="pencil" />
            </button>
          }
          <button className={btn} onClick={() => delCosts(title, item.id, item.amount)}>
            <Icon icon="delete" />
          </button>
        </div>
      </li>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  delCosts: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}