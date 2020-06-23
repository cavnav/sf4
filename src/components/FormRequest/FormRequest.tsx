import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
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

  return state.isRequestSent ? (<Redirect
    to={{
      pathname: '/userSpace',
    }}
    />) : (<div
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
        rules={[{ required: false, message: 'Please input your username!' }]}
      >
        <Input 
        defaultValue={'79265371034'}/>      
      </Form.Item>
      
      <Form.Item
          label="ФИО"
          name="fio"
          rules={[{ required: false, message: 'Please input your username!' }]}
        >
        <Input 
        defaultValue={'Горячев Дмитрий Ильич'}/>      
      </Form.Item>
      <Form.Item
          label="почта"
          name="email"
          rules={[{ required: false, message: 'Please input your username!' }]}
        >
        <Input 
        defaultValue={'ss@gmail.com'}/>      
      </Form.Item>
      <Form.Item
          label="название компании / ИНН"
          name="company"
          rules={[{ required: false, message: 'Please input your username!' }]}
        >
        <Input 
        defaultValue={'11111'}/>      
      </Form.Item>
      <Form.Item
          label="название контрагента / ИНН"
          name="debitor"
          rules={[{ required: false, message: 'Please input your username!' }]}          
        >
        <Input 
          defaultValue={'2222'}
        />      
      </Form.Item>
      <Form.Item
          label="сумма"
          name="sum"
          rules={[{ required: false, message: 'Please input your username!' }]}
        >
        <Input 
        defaultValue={'1234567'}/>      
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
  function onFinish() {
    
    setState(state => {
      return { 
        ...state,
        isRequestSent: true,
      };
    });
  }
}   

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}