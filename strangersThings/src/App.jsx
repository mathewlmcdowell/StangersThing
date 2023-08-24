import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Posts from './Components/Posts'
import Profile from './Components/Profile'
import CreatePosts from './Components/CreatePosts'
import NavBar from './Components/NavBar'
import Register from './Components/Register'
import Login from './Components/Login'
import Logout from './Components/Logout'


// import './App.css'

function App() {

  return (
    <>
     <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Profile />} />
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

