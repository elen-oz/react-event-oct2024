import { Box, Typography } from '@mui/material';
import HeaderImg from '../../../assets/_IconButton_.svg';
import AuthButton from '../../AuthButton/index.jsx';

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

function Header() {
  return (
    <Box display="flex" align-content="center" height="70px">
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <img src={HeaderImg} alt="header image" loading="lazy" />

        <Link underline="hover" component={RouterLink} to="/requests" color="inherit">
          <Typography>Запросы о помощи</Typography>
        </Link>

        <AuthButton />
      </Box>
    </Box>
  );
}

export default Header;
