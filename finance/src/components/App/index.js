import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import classes from './App.less'

import Board from '../Board'
import base from '../../base'
import List from '../List'

class App extends Component {

  state = {
    isAccept: false,
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
    base.syncState(`isAccept`, {
      context: this,
      state: 'isAccept',
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
      category: categories,
      isAccept: true
    })
  }

  fixCosts = (category, { amount, description }) => {
    const cost = parseFloat(amount);
    const categories = [...this.state.category]
      .map(item => {
        if (item.title === category) {
          const spend = `${amount} - ${description}`;
          const history = item.history ? [...item.history, spend] : [spend];
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
    const { category, isAccept } = this.state;
    const rest = category.filter(category => category.title === 'rest')[0];
    const necessary = category.filter(category => category.title === 'necessary')[0];
    return (
      <Router>
       <div className={classes.container}>
          <Board
            items={category}
            setAmounts={this.setAmounts}
            fixCosts={this.fixCosts}
            isAccept={isAccept}
          />
          <Route exact path="/rest" render={() => (
            <List items={rest.history}/>
          )}/>
          <Route exact path="/necessary" render={() => (
            <List items={necessary.history}/>
          )}/>
       </div>
      </Router>
    );
  }
}

export default App;
