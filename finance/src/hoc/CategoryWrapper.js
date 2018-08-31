import React from 'react'
import Form from '../components/Form'

const categoryWrapper = (Category) => (props) => {
  let children = null;
  switch(props.title) {
    case 'rest':
      children = <Form onSubmit={data => props.fixCosts('rest', data)}/>;
      break;
    case 'necessary':
      children = <Form onSubmit={data => props.fixCosts('necessary', data)}/>;
      break;
    case 'total':
      children = <Form isSingle onSubmit={props.setAmounts}/>;
      break;
  }

  return (
    <Category {...props}>
      {children}
    </Category>
  )
};

export default categoryWrapper;