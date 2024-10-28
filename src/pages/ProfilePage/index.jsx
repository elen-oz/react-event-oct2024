import { Typography, Box } from '@mui/material';
import ProfileCard from '../../components/ProfileCard.jsx';
import TabsSection from '../../components/TabsSection.jsx';
import { useEffect, useState } from 'react';

import { fetchUserProfile } from '../../api/user.js';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUserProfile();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  return (
    <Box sx={{ backgroundColor: '#F5F5F5', padding: 4 }}>
      <Typography variant="h5">Мой профиль</Typography>

      <Box display="flex" justifyContent="between" alignItems="start" sx={{ gap: 2 }}>
        <Box sx={{ width: '320px' }}>
          <ProfileCard userData={userData} />
        </Box>
        <Box sx={{ width: '1080px' }}>
          <TabsSection userData={userData} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
