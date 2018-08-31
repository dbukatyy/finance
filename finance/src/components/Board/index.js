import React from 'react'
import PropTypes from 'prop-types'

import classes from './board.less'
import Category from '../Category'
import randomKey from '../../utils/random'

const Board = ({ items, setAmounts, fixCosts, isAccept }) => {
  return (
    <div className={classes.board}>
      {items.map(item => (
          <Category
            key={randomKey()}
            title={item.title}
            amount={item.amount}
            setAmounts={setAmounts}
            fixCosts={fixCosts}
            isAccept={isAccept}
          />
        )
      )}
    </div>
  )
};

Board.propTypes = {
  items: PropTypes.array.isRequired,
  setAmounts: PropTypes.func.isRequired,
  fixCosts: PropTypes.func.isRequired,
  isAccept: PropTypes.bool.isRequired
}

export default Board;