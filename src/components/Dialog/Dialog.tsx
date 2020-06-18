import React from 'react';
import styled from 'styled-components';

const Comp = getStyledComp();
const stateInit = {
  isRequestSent: false,
};

interface Props {
  children: React.ReactNode;
}

export function Dialog({
  children,
}: Props) {
  const [state, setState] = React.useState(stateInit);

  return (
    <dialog
      className='Dialog'
    >
      { children }
    </dialog>
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