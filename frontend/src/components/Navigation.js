import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home"><Link to="/">Главная</Link></Menu.Item>
      <Menu.Item key="login"><Link to="/login">Вход</Link></Menu.Item>
      <Menu.Item key="register"><Link to="/register">Регистрация</Link></Menu.Item>
    </Menu>
  );
};

export default Navbar;

