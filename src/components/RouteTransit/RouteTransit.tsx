import React, { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';

const Comp = getStyledComp();
const stateInit = {
  isRequestSent: false,
};

interface Props {
  isAuth: boolean;
  path: string;
}

export const RouteTransit: FunctionComponent<Props> = ({
  isAuth,
  path,
  children,
}) => {

  return <Route
    path={path}
    render={() => isAuth === false ?
      <div>{ children }</div> : <Redirect
    to={{
      pathname: './',
    }}
  />;



  //------------------------------------------
}   

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}