import {
  Form, Input, Button,
} from 'antd';

import React from 'react';
import { useHistory } from 'react-router';

import styles from './Registration.module.sass';

const validateMessages = {
  required: "${label} обов'язкове поле для заповнення",
  types: {
    email: 'Не валідний імейл',
  },
  string: {
    range: '${label} повинен бути мінімум ${min} символів',
  },
};

const layout = {
  labelCol: {
    span: 11,
  },
  wrapperCol: {
    span: 16,
  },
};

const Registration = (props) => {
  const history = useHistory();

  const onFinish = () => {
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Реєстрація</div>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['user', 'name']} label="Імя" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Імейл" rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Пароль" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="repeat password" label="Повторити пароль" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Зареєструватись
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
