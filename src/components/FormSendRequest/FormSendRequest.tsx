import React from 'react';
import { Form, Input } from 'antd';
import styled from 'styled-components';

const Comp = getStyledComp();

export function FormSendRequest({

}) {
  return <Form>
    <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
      <Input />
      <Comp>
        test!
      </Comp>
    </Form.Item>
  </Form>;
}   

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}