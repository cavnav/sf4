import React, { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  FormRequest,
  Dialog,
  Auth,
} from '../';
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
}) => {

  return <Route
    path={path}
    render={() => isAuth === false ?
      <Dialog>
        <Auth />
      </Dialog> :
      <FormRequest />
    }
  />
  //------------------------------------------
}   

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}