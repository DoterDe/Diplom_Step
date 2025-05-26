// src/App.js
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import Home from './Authentification/Home';
import Login from './Authentification/Login';
import Register from './Authentification/Register';
import Navbar from './components/Navigation';
import Dashboard from './Authentification/Dashboard';
import PrivateRoute from './components/PrivateRoute';

export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('access_token')
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <ConfigProvider theme={{ token: { colorPrimary: '#1890ff' } }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </ConfigProvider>
    </AuthContext.Provider>
  );
}

export default App;
