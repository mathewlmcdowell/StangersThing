import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Posts from './Components/Posts'
import Profile from './components/Profile'
import CreatePosts from './components/CreatePosts'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Home from './components/Home'
import './index.css'

// import './App.css'

function App() {

  return (
    <>
     <NavBar />
      <div>
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/new' element={<CreatePosts />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>

      </div>
    </>
  )
}

export default App

