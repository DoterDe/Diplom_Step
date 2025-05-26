import React, { useEffect, useState } from 'react';
import api from '../api';
import { Typography } from 'antd';

const Home = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    api.get('test/')
      .then(res => setMsg(res.data.message))
      .catch(() => setMsg('Требуется вход'));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={2}>Главная страница</Typography.Title>
      <Typography.Paragraph>{msg}</Typography.Paragraph>
    </div>
  );
};

export default Home;
