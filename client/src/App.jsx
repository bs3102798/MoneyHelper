import './App.css'
import { Route, Routes } from "react-router-dom"
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'
import axios from 'axios'
import { UserContextPovider } from './UserContext'
import AccountPage from './pages/AccountPage'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true

function App() {



  return (
    <>
      <UserContextPovider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/account/:subpage?' element={<AccountPage />} />
          </Route>
        </Routes>
      </UserContextPovider>
    </>
  )
}

export default App
