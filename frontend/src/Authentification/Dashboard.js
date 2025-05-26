import React from 'react';
import { Typography } from 'antd';

const Dashboard = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Typography.Title level={2}>Панель управления</Typography.Title>
      <Typography.Paragraph>
        Добро пожаловать! Вы вошли в систему.
      </Typography.Paragraph>
    </div>
  );
};

export default Dashboard;
