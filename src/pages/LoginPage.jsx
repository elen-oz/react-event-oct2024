import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext.jsx';

import users from '../data/userData.js';
import ExampleLoginSection from '../components/ExampleLoginSection.jsx';

function LoginPage() {
  const { currentUser, login, isLoading } = useAuth();
  const navigate = useNavigate();

  const [loginValue, setLoginValue] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (currentUser) {
      navigate('/requests', { replace: true });
    }
  }, [currentUser, navigate]);

  const validateLogin = () => {
    if (!loginValue) {
      setLoginError('Логин не может быть пустым');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(loginValue)) {
      setLoginError('Введите корректный e-mail');
      return false;
    }
    setLoginError('');
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Пароль не может быть пустым');
      return false;
    }
    if (password.length < 6) {
      setPasswordError('Пароль должен содержать минимум 6 символов');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleLogin = async () => {
    const isLoginValid = validateLogin();
    const isPasswordValid = validatePassword();

    if (isLoginValid && isPasswordValid) {
      const success = await login(loginValue, password);
      if (!success) {
        setPassword('');
      }
    } else {
      toast.error('Пожалуйста, проверьте правильность введенных данных', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        width="50%"
        height="100%"
        sx={{
          paddingLeft: '40px',
        }}
      >
        <Typography variant="h4" sx={{ mt: 8, mr: 5, textAlign: 'left' }}>
          Авторизация
        </Typography>
        <Typography variant="h5" sx={{ mt: 11.25, mb: '35px', textAlign: 'left' }}>
          Вход
        </Typography>

        <Box width="485px">
          <TextField
            fullWidth
            label="Логин"
            placeholder="Введите e-mail"
            variant="outlined"
            margin="normal"
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
            onBlur={validateLogin}
            error={Boolean(loginError)}
            helperText={loginError}
            sx={{ mb: '30px' }}
          />
          <TextField
            fullWidth
            label="Пароль"
            placeholder="Введите пароль"
            variant="outlined"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            error={Boolean(passwordError)}
            helperText={passwordError}
            sx={{ mb: '40px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          paddingLeft: '40px',
        }}
      >
        <Typography variant="h4" sx={{ mt: 8, mr: 5, mb: 11.25, textAlign: 'left' }}>
          Тестовые профили
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            overflowY: 'auto',
          }}
        >
          {users.map((user) => (
            <ExampleLoginSection
              key={user.login}
              title={user.title}
              login={user.login}
              password={user.password}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
