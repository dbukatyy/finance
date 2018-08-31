import React from 'react'
import PropTypes from 'prop-types'

import classes from './board.less'
import Category from '../Category'
import randomKey from '../../utils/random'

const Board = ({ items, setAmounts, fixCosts }) => {
  return (
    <div className={classes.board}>
      {items.map(item => (
          <Category
            key={randomKey()}
            title={item.title}
            amount={item.amount}
            setAmounts={setAmounts}
            fixCosts={fixCosts}
          />
        )
      )}
    </div>
  )
};

Board.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Board;