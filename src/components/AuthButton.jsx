import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAuth } from '../context/AuthContext.jsx';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DropdownMenu from './DropdownMenu.jsx';

const AuthButton = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  return currentUser ? (
    <DropdownMenu />
  ) : (
    <Button variant="outlined" color="inherit" onClick={handleLogin}>
      Войти
    </Button>
  );
};

export default AuthButton;
