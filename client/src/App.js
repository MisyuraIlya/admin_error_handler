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
    dashboard={Dashboard}
    dataProvider={restProvider('http://localhost:3000')}
    >
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit}/>
      <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit}/>
      <Resource name='projects' list={ProjectsList}/>
      {projects.map((element,index) =>
        <Resource name={element.name} list={LogsList}/>
      )}
      
    </Admin>
  );
}

export default App;
