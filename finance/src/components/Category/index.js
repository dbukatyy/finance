import React from 'react'
import categoryWrapper from '../../hoc/CategoryWrapper'

const Category = ({ amount, title, children }) => {
  console.log(amount, title, children);
  return (
    <div>
      <h3>{title}</h3>
      <p>{amount}</p>
      {children}
    </div>
  )
};

export default categoryWrapper(Category);