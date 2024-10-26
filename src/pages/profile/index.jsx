import { Container, Typography, Grid2, Box, Paper } from "@mui/material";
import ProfileCard from "../../components/ProfileCard.jsx";
import Personaldata from "../../components/Personaldata.jsx";

const ProfilePage = () => {
  return (
    <Container sx={{ backgroundColor: "#F5F5F5", padding: 4 }}>
      <Typography variant="h5">Мой профиль</Typography>

      <Box display="flex" justifyContent="between" alignItems="start" sx={{ gap: 2 }}>
        <Box sx={{ width: "320px" }}>
          <ProfileCard />
        </Box>
        <Box sx={{ width: "1080px" }}>
          <Personaldata />
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;