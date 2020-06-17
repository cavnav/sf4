import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Comp = getStyledComp();

export function Body({
  children,
}: Props) {
  return <div 
    className='Body'
    >
      { children }
    </div>;
}

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}