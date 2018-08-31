import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
         type="number"
         name="amount"
         min="0"
         placeholder="amount"
         onChange={this.fieldChangeHandler}
        />
        { !isSingle &&
        <input
          type="string"
          name="description"
          placeholder="information"
          onChange={this.fieldChangeHandler}
          />
        }
        <button>save</button>
      </form>
    )
  }
};

export default Form;