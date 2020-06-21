import React from 'react';
import { Redirect } from 'react-router-dom';
import { 
  Form, 
  Input,
  Button, 
} from 'antd';
import styled from 'styled-components';

const Comp = getStyledComp();
const stateInit = {
  isRequestSent: false,
};

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
        name="phone"
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