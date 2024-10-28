import { Container, Box } from '@mui/material';
import { Header, Footer } from './index.jsx';

const MainContainer = ({ children }) => {
  return (
    <Box width="1400px" maxWidth="100%" minHeight="100vh" sx={{ margin: '0 auto' }}>
      <Header />
      <Container width="100%">{children}</Container>
      <Footer />
    </Box>
  );
};

export default MainContainer;
