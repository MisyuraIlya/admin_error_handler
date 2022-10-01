import { Admin, Resource,CustomRoutes } from 'react-admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import LogsList from './components/LogsList'
import ProjectsList from './components/UserList'
import Dashboard from './pages/Dashboard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AllClients from './components/AllClients'
import Last24Hour from './components/Last24Hour'
import ProjectData from './components/ProjectData'
import Api from './components/Api'
import simpleRestProvider from 'ra-data-simple-rest';
import ClientCreate from './components/ClientCreate'
import CronData from './components/CronData'
function App() {

  return (
    <Admin 
    api={Api}
    // cron={CronData}
    dashboard={Dashboard}
    dataProvider={restProvider('http://localhost:8085/api')}
    >
      {/* <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit}/> */}
      {/* <Resource name='users' list={UserList} create={UsserCreate} edit={UserEdit}/> */}
      <Resource name='clients' list={AllClients} create={ClientCreate} edit={ProjectData} show={CronData} />
      <Resource name='api' list={Api}/>
      <Resource name='last24' list={Last24Hour}/>
      <Resource name='criticals' list={Last24Hour}/>
      <Resource name='crons' list={AllClients} edit={CronData}/>
      <CustomRoutes>
        <Route path="/cron" element={<CronData />} />
      </CustomRoutes>
      {/* {projects.map((element,index) =>
        <Resource name={element.name} list={LogsList}/>
      )} */}
      
    </Admin>
  );
}

export default App;
