import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Typography } from '@mui/material';
import HeaderImg from '../../../assets/_IconButton_.svg';
import AuthButton from '../../AuthButton/index.jsx';

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2)',
        height: '84px',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <img src={HeaderImg} alt="header image" loading="lazy" />

        <Link component={RouterLink} to="/requests" color="inherit" underline="none">
          <Typography>Запросы о помощи</Typography>
        </Link>

        <AuthButton />
      </Box>
    </Box>
  );
}

export default Header;
