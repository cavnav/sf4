import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
const Comp = getStyledComp();

export function Header(props: Props) {
  return <div 
    className='Header'
    >
      { props.children }
    </div>;
}

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}