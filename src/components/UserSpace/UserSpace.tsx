import React from 'react';
import { RequestList } from '../';
import { Route } from 'react-router-dom';
import { Request } from '../';
import styled from 'styled-components';

const Comp = getStyledComp();
const stateInit = {
  isRequestSent: false,
};

export function UserSpace({
}) {
  const [state, setState] = React.useState(stateInit);

  return (
    <div
      className='UserSpace'
    >
      <Route
        exact
        path='/userSpace'
        component={RequestList}
      />
      <Route
        path='/userSpace/Request'
        component={Request}
      />
    </div>
  );

  //------------------------------------------
  
  function onFinish(values: any) {
    localStorage.setItem('userData', JSON.stringify(values));
    setState({
      ...state,
      isRequestSent: true,
    });
  }
}   

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}