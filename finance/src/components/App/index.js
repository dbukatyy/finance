import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import classes from './App.less'

import Board from '../Board'
import base from '../../base'
import List from '../List'
import Header from '../Header'
import Loader from '../Loader'
import defaultState from '../../defaultState'
import getId from '../../utils/random'

class App extends Component {

  state = {...defaultState}

  componentDidMount() {
    this.setState({ isLoad: false })

    base.syncState(`categories`, {
      context: this,
      state: 'category',
      asArray: true,
      then: () => this.setState({ isLoad: true })
    })

    base.syncState(`isAccept`, {
      context: this,
      state: 'isAccept',
    })
  }

  onReset = () => {
    this.setState({ ...defaultState })
  }

  setAmounts = ({ amount }) => {
    const total = parseFloat(amount);
    const categories = this.state.category.map(category => {
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

  fixCosts = (category, { amount, description = '' }) => {
    const cost = parseFloat(amount);
    const categories = this.state.category.map(item => {
        if (item.title === category) {
          const spend = {
            id: getId(),
            amount: Number(amount),
            description
          }
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

  delCosts = (categoryTitle, costId, amount) => {
    const category = this.state.category.filter(category => category.title === categoryTitle)[0];
    const newHistory = category.history.filter(item => item.id !== costId);
    const categories = this.state.category.map(category => {
        if (category.title === categoryTitle) {
          return {
            ...category,
            history: newHistory,
            amount: category.amount + Number(amount)
          }
        }
        return category;
      })

    this.setState({
      category: categories
    })
  };

  onEdit = (title, id, amount) => {
    const category = this.state.category.filter(category => category.title === title)[0];
    let oldAmount = 0;
    const newHistory = category.history.map(item => {
      if (item.id === id) {
        oldAmount = item.amount;
        item.amount = amount;
      }
      return item;
    });

    const categories = this.state.category.map(category => {
      if (category.title === title) {
        return {
          ...category,
          history: newHistory,
          amount: category.amount + Number(oldAmount) - Number(amount)
        }
      }
      return category;
    })

    this.setState({
      category: categories
    })
  };

  render() {
    const { category, isAccept, isLoad } = this.state;
    const rest = category.filter(category => category.title === 'rest')[0];
    const necessary = category.filter(category => category.title === 'necessary')[0];
    const total = category.filter(category => category.title === 'total')[0];
    const balance = rest.amount + necessary.amount;
    const totalSpend = total.amount - balance;
    return (
      isLoad ?
      <Router>
       <div className={classes.container}>
          <Header onReset={this.onReset} balance={balance} totalSpend={totalSpend}/>
          <Route exact path="/" render={() => (
            <Board
              items={category}
              setAmounts={this.setAmounts}
              fixCosts={this.fixCosts}
              isAccept={isAccept}
            />
          )}/>
          <Route exact path="/rest" render={() => (
            <List
              onEdit={this.onEdit}
              delCosts={this.delCosts}
              items={rest.history || []}
              title={rest.title}/>
          )}/>
          <Route exact path="/necessary" render={() => (
            <List
              onEdit={this.onEdit}
              delCosts={this.delCosts}
              items={necessary.history || []}
              title={necessary.title} />
          )}/>
       </div>
      </Router>
      :
      <Loader/>
    );
  }
}

export default App;
