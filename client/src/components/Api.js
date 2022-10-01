import React from 'react';

import PhpCard from './codeBlock/PhpCard';
import JsCard from './codeBlock/JsCard';

import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import CronCard from './codeBlock/CronCard';

const Api = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="PHP API" value="1" />
                  <Tab label="JavaScript API" value="2" />
                  <Tab label="CRON API" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1"><PhpCard/></TabPanel>
              <TabPanel value="2"><JsCard/></TabPanel>
              <TabPanel value="3"><CronCard/></TabPanel>
            </TabContext>
          </Box>
    );
};

export default Api;