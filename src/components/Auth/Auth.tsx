import React from 'react';
import { Redirect } from 'react-router-dom';
import { 
  Form, 
  Input,
  Button, 
} from 'antd';
import { UserId } from  '../../interfaces';
import styled from 'styled-components';
import { serverAPI } from '../../serverAPI';

const Comp = getStyledComp();
const stateInit = {
  isRequestSent: false,
};

interface AuthIntf {
  userId: UserId;
}

export function Auth({
}) {
  const [state, setState] = React.useState(stateInit);

  return state.isRequestSent ? (
    <Redirect 
      to={{
        pathname: '/userSpace',
      }}
    />) : (
    <Form
      className='Auth'
      onFinish={onFinish}
    >    
      <Form.Item
        label="моб.телефон"
        name="userId"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />      
      </Form.Item>
      <Form.Item
          label="код из смс"
          name="smscode"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />      
      </Form.Item>
      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit"
        >
          Получить смс-код
        </Button>
      </Form.Item>
  </Form>);

  //------------------------------------------
  
  function onFinish(vals: Partial<AuthIntf>) {
    const { userId } = vals;
    serverAPI.auth({ userId })
    .then(() => {
      setState({
        ...state,
        isRequestSent: true,
      });
    });
  }
}   

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}