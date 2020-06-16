import React from 'react';
import { 
  Form, 
  Input,
  Button, 
} from 'antd';
import styled from 'styled-components';

const Comp = getStyledComp();

export function FormSendRequest({

}) {
  return <Form
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
        Войти и отправить заявку
      </Button>
    </Form.Item>
    </div>
    </div>
    </div>
    
  </Form>;
}   

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}