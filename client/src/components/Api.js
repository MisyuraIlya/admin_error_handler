import React from 'react';

import PhpCard from './codeBlock/PhpCard';
import JsCard from './codeBlock/JsCard';

import Box from '@mui/material/Box';
// import Tab from '@material-ui/core/Tab';
// import TabContext from '@material-ui/lab/TabContext';
// import TabList from '@material-ui/lab/TabList';
// import TabPanel from '@material-ui/lab/TabPanel';
import CronCard from './codeBlock/CronCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PhpCard8 from './codeBlock/PhpCard8';
import 'react-tabs/style/react-tabs.css';
const Api = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <Tabs>
          <TabList>
            <Tab>PHP 7</Tab>
            <Tab>PHP 8</Tab>
            <Tab>JAVA SCRIPT API</Tab>
            <Tab>CRON API</Tab>
          </TabList>

          <TabPanel>
            <PhpCard/>
          </TabPanel>
          <TabPanel>
            <PhpCard8/>
          </TabPanel>
          <TabPanel>
          <JsCard/>
            </TabPanel>
          <TabPanel>
            <CronCard/>
          </TabPanel>
        </Tabs>
      </Box>
    );
};

export default Api;