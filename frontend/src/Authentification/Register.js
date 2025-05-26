import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/csrf/', { withCredentials: true })
      .then(res => setCsrfToken(res.data.csrfToken));
  }, []);

  const onFinish = values => {
    axios.post('http://localhost:8000/api/register/', values, {
      headers: { 'X-CSRFToken': csrfToken },
      withCredentials: true,
    })
      .then(() => {
        message.success('Регистрация успешна');
        navigate('/login');
      })
      .catch(() => message.error('Ошибка регистрации'));
  };

  return (
    <Form onFinish={onFinish} style={{ maxWidth: 400, margin: '50px auto' }}>
      <Form.Item name="username" rules={[{ required: true }]}>
        <Input placeholder="Имя пользователя" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true }]}>
        <Input.Password placeholder="Пароль" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>Зарегистрироваться</Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
