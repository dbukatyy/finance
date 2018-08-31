import React, {Component} from 'react'

class Form extends Component {

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
    const { isSingle } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input
         type="number"
         name="amount"
         onChange={this.fieldChangeHandler}
        />
        { !isSingle &&
        <input
          type="string"
          name="description"
          onChange={this.fieldChangeHandler}
          />
        }
        <button>save</button>
      </form>
    )
  }
};

export default Form;