import React, {Component} from 'react'
import PropTypes from 'prop-types'

import classes from './Form.less'
import Button from '../Button'

class Form extends Component {

  static propTypes = {
    isSingle: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    amount: 0,
  }

  fieldChangeHandler = ({ target }) =>
    this.setState({
      [target.name]: target.value
    })

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({...this.state});
  }


  render() {
    const { isSingle = false } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input
        className={classes.input}
         type="number"
         name="amount"
         min="0"
         placeholder="amount"
         step="0.01"
         onChange={this.fieldChangeHandler}
        />
        { !isSingle &&
        <input
        className={classes.input}
          type="string"
          name="description"
          placeholder="information"
          onChange={this.fieldChangeHandler}
          />
        }
        <Button>Save</Button>
      </form>
    )
  }
};

export default Form;