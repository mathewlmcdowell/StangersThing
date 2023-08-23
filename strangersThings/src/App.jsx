import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Posts from './components/Posts'
import Profile from './components/Profile'
import CreatePosts from './components/CreatePosts'
import NavBar from './components/NavBar'
import Register from './components/Register'
import './index.css'


export default function App() {

  return (
    <div>
     <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/new' element={<CreatePosts />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      </div>
    )

  };
