import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
// eslint-disable-next-line import/extensions,import/namespace
import ProfileDataTabItem from './ProfileDataTabItem.jsx';
import ContactsTabItem from './ContactsTabItem.jsx';
import FavouriteCardsTabItem from './FavouriteCardsTabItem.jsx';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabsSection = ({ userData }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: '#fff' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Личные данные" {...a11yProps(0)} />
          <Tab label="Контакты" {...a11yProps(1)} />
          <Tab label="Избранное" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProfileDataTabItem userData={userData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContactsTabItem userData={userData} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FavouriteCardsTabItem />
      </TabPanel>
    </Box>
  );
};

export default TabsSection;
