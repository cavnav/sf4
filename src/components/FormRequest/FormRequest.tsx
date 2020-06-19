import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Comp = getStyledComp();
const stateInit = {
  isRequestSent: false,
};

export function FormRequest({
}) {
  const [state, setState] = React.useState(stateInit);
  const history = useHistory();

  return (
    <div
      className='Request'
    >
      Форма заявки.
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );

  //------------------------------------------
}   

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}