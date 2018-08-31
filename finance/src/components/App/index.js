import React, { Component } from 'react';
import classes from './App.less'

import Board from '../Board'

class App extends Component {

  state = {
    total: 0,
    gategory: [
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

  render() {
    const { gategory } = this.state;
    return (
       <div className={classes.container}>
          <Board
            items={gategory}
          />
          <p>detail</p>
       </div>
    );
  }
}

export default App;
