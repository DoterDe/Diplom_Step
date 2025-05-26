// frontend/src/Home.js
import React, { useEffect, useState } from 'react';
import { fetchProtectedData } from './api';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProtectedData()
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Нет доступа'));
  }, []);

  return (
    <div>
      <h1>Главная</h1>
      <p>{message}</p>
    </div>
  );
}

export default Home;
