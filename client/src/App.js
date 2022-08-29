import { Admin, Resource } from 'react-admin'
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
function App() {

  const [projects, setProjects] = useState([])
  const fetchProject = async () =>{ 
    const response = await axios.get('http://localhost:5000/projects')
    setProjects(response.data)
  }
  useEffect(() => {
    fetchProject()
  },[])
  return (
    <Admin 
    api={Api}
    dashboard={Dashboard}
    dataProvider={restProvider('http://localhost:3000')}
    >
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit}/>
      <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit}/>
      <Resource name='clients' list={AllClients}  edit={ProjectData}/>
      <Resource name='api' list={Api}/>
      <Resource name='last24' list={Last24Hour}/>
      <Resource name='critical' list={Last24Hour}/>
      <Resource name='services' list={Last24Hour}/>
      {/* {projects.map((element,index) =>
        <Resource name={element.name} list={LogsList}/>
      )} */}
      
    </Admin>
  );
}

export default App;
