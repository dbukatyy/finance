import React from 'react'

const categoryWrapper = (Category) => (props) => {
  let children = null;

  switch(props.title) {
    case 'rest':
      children = <p>rest</p>;
      break;
    case 'necessary':
      children = <p>necessary</p>;
      break;
    case 'charity':
      children = <p>charity</p>;
      break;
    case 'total':
      children = <p>total</p>;
      break;
    case 'economy':
      children = <p>economy</p>;
      break;
  }

  return (
    <Category {...props}>
      {children}
    </Category>
  )
};

export default categoryWrapper;