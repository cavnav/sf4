import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
const Comp = getStyledComp();

export function ControlPanel(props: Props) {
  return <div 
    className='ControlPanel'
    >
      { props.children }
    </div>;
}

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}