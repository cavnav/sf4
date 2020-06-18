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
    <div>
    <div style={{display: 'flex'}}>
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
    </div>
    <div>
      <div>
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit"
          >
            Войти
          </Button>
      </Form.Item>
      </div>
      <div>
      <Form.Item
          label="ФИО"
          name="fio"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />      
      </Form.Item>
      <Form.Item
          label="почта"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />      
      </Form.Item>
      <Form.Item
          label="название компании / ИНН"
          name="company"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />      
      </Form.Item>
      <Form.Item
          label="название контрагента / ИНН"
          name="debitor"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />      
      </Form.Item>
      <Form.Item
          label="сумма"
          name="sum"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />      
      </Form.Item>

      <Form.Item>
      <Button 
        type="primary" 
        htmlType="submit"
      >
        Отправить заявку
      </Button>
    </Form.Item>
    </div>
    </div>
    </div>
    
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