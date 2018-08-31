import React from 'react'

import classes from './board.less'
import Category from '../Category'
import randomKey from '../../utils/random'

const Board = ({ items }) => {
  return (
    <div className={classes.board}>
      {items.map(item => (
          <Category
            key={randomKey()}
            title={item.title}
            amount={item.amount}
          />
        )
      )}
    </div>
  )
};

export default Board;