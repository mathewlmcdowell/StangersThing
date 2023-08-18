import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'
import Profile from './components/Profile'
import CreatePost from './components/CreatePost'

import './App.css'

function App() {

  return (
    <>
      <h1>Stranger's Things</h1>
      <div id="container">
        <div id="navbar">
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to="/posts/new">Add A Post</Link>
          <Link to="/posts">See All Post</Link>

        </div>
      </ div>
      <div>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/new' element={<CreatePost />} />
        </Routes>

      </div>
    </>
  )
}

export default App
