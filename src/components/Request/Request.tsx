import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const Comp = getStyledComp();
const stateInit = {
  isRequestSent: false,
};

export function Request({
}) {
  const [state, setState] = React.useState(stateInit);

  return (
    <div
      className='Request'
    >
      Ожидайте запрос документов, ориентировочный срок запроса документов 30 минут.
    </div>
  );

  //------------------------------------------
}   

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}