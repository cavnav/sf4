import React from 'react';
import { 
  Table, 
} from 'antd';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Comp = getStyledComp();
const stateInit = {
  isRequestSent: false,
};

export function RequestList({
}) {
  const [state, setState] = React.useState(stateInit);

  
  return (
    <div
      className='RequestList'
    >
      <Table columns={[]} dataSource={[]} />
      <Link
        to='/userSpace/Request'
      >Заявка
      </Link>
    </div>
  );

  //------------------------------------------
}   

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}