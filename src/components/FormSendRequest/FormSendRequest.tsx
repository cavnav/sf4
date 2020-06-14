import React from 'react';
import { Form, Input } from 'antd';

export function FormSendRequest({

}) {

  return <Form>
    <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
      <Input />
    </Form.Item>
  </Form>;
}   