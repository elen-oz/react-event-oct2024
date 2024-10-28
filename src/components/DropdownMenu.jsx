import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAuth } from '../context/AuthContext.jsx';

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      logout();
      handleClose();
      navigate('/');
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };

  const menuItems = [
    {
      icon: <PersonIcon fontSize="small" />,
      text: 'Мой профиль',
      path: '/profile',
      onClick: handleClose,
    },
    {
      icon: <LogoutIcon fontSize="small" />,
      text: 'Выйти',
      onClick: handleLogout,
    },
  ];

  return (
    <div>
      <IconButton
        aria-label="user menu"
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={item.onClick}
            component={item.path ? Link : 'li'}
            to={item.path}
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': {
                textDecoration: 'none',
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownMenu;
