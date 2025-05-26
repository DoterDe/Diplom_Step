import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import api from '../api';
import { Form, Input, Button, message } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const onFinish = async (values) => {
    try {
      const res = await api.post('/api/token/', values);
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      setIsAuthenticated(true);
      message.success('Вы успешно вошли!');
      navigate('/'); 
    } catch (err) {
      message.error('Неверные учетные данные!');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', marginTop: '5rem' }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Имя пользователя" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Пароль" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

