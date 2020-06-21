import React from 'react';
import { useHistory } from 'react-router-dom';
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

export function FormRequest({
}) {
  const [state, setState] = React.useState(stateInit);
  const history = useHistory();

  return (
    <div
      className='Request'
    >
      Форма заявки.
      <Form
      className='Request'
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
  </Form>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );

  //------------------------------------------
}   

function onFinish() {
  
}

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}