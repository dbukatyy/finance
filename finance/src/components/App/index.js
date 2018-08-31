import React, { Component } from 'react';
import classes from './App.less'

import Board from '../Board'
import base from '../../base'

class App extends Component {

  state = {
    total: 0,
    category: [
      {
        title: 'total',
        amount: 0
      },
      {
        title: 'rest',
        amount: 0,
        history: [],
        part: .2
      },
      {
        title: 'necessary',
        amount: 0,
        history: [],
        part: .6
      },
      {
        title: 'charity',
        amount: 0,
        part: .1
      },
      {
        title: 'economy',
        amount: 0,
        part: .1
      },
    ]
  }

  componentDidMount() {
    base.syncState(`categories`, {
      context: this,
      state: 'category',
      asArray: true
    });
  }

  setAmounts = ({ amount }) => {
    const total = parseFloat(amount);
    const categories = [...this.state.category]
      .map(category => {
        if (category.part) {
          return {
            ...category,
            amount: total * category.part
          }
        }

        return {
          ...category,
          amount: total
        }
      });

    this.setState({
      category: categories
    })
  }

  fixCosts = (category, { amount, description }) => {
    const cost = parseFloat(amount);
    const categories = [...this.state.category]
      .map(item => {
        if (item.title === category) {
          const spend = `${amount} - ${description}`;
          const history = item.history ? item.history.push(spend) : [spend];
          return {
            ...item,
            amount: item.amount - cost,
            history
          }
        }
        return item
      })

    this.setState({
      category: categories
    })
  }

  render() {
    const { category } = this.state;
    return (
       <div className={classes.container}>
          <Board
            items={category}
            setAmounts={this.setAmounts}
            fixCosts={this.fixCosts}
          />
          <p>detail</p>
       </div>
    );
  }
}

export default App;
